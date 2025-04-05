import * as schema from "./db/schema";
import { typeIdGenerator, type UserId } from "./db/typeid";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { eq, asc, and } from "drizzle-orm";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";
import { logger } from "hono/logger";
import { Hono } from "hono";
import { SelectMessageSchema, MessageSchema } from "./db/chat/chat.zod";
import { createDb } from "./db/db";
import { serverEnv } from "./serverEnv";
import { type Message, createDataStream } from "ai";
import { stream } from "hono/streaming";
import { createGameAgent } from "./ai/gameAgent";
import { createDrizzleChatHistoryService } from "./ai/chatHistoryService";
import { createAiClient } from "./ai/aiClient";
import { LiteralClient } from "@literalai/client";

const db = createDb({
  logger: {
    logQuery: (query) => console.log(query),
  },
  dbUrl: serverEnv.DATABASE_URL,
});

const literalaiClient = new LiteralClient({
  apiKey: serverEnv.LITERAL_API_KEY,
});

// Create the Hono app
export const app = new Hono()
  .use(requestId())
  .use(logger())
  .use(
    "*",
    cors({
      origin: ["http://localhost:3000", "https://forheads.ai"],
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE", "PATCH"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  )
  .get(
    "/conversation",
    zValidator("query", z.object({ address: z.string() })),
    async (c) => {
      const address = c.req.valid("query").address;
      if (!address) {
        return c.json({ error: "Address is required" }, 400);
      }
      const userId = await getUserIdFromContext(address);

      try {
        let conversation = await db.query.conversationsTable.findFirst({
          where: eq(schema.conversationsTable.createdBy, userId),
          columns: { id: true },
        });

        // If no conversation exists, create one and add the initial AI message
        if (!conversation) {
          const newConversationId = typeIdGenerator("conversation");
          try {
            const insertedConversation = await db
              .insert(schema.conversationsTable)
              .values({
                id: newConversationId,
                createdBy: userId,
                title: "New Conversation", // Add required title field
              })
              .returning({ id: schema.conversationsTable.id });

            if (insertedConversation.length === 0 || !insertedConversation[0]) {
              console.error(
                "Failed to create a new conversation for user:",
                userId,
              );
              return c.json(
                { error: "Failed to initialize conversation" },
                500,
              );
            }
            conversation = insertedConversation[0];

            const firstMessageId = typeIdGenerator("message");
            // Insert the initial AI message
            const firstMessageContent = {
              id: firstMessageId,
              role: "assistant",
              content: "Who are you?",
            } satisfies Message;
            const insertedMessage = await db
              .insert(schema.messagesTable)
              .values({
                id: firstMessageId,
                conversationId: conversation.id,
                message: firstMessageContent, // Use the correct schema {role, content}
                createdBy: userId,
              })
              .returning();

            if (insertedMessage.length === 0 || !insertedMessage[0]) {
              console.error(
                "Failed to insert initial AI message for conversation:",
                conversation.id,
              );
              // Potentially delete the conversation here or handle differently?
              return c.json(
                { error: "Failed to initialize conversation message" },
                500,
              );
            }

            const validatedFirstMessage = SelectMessageSchema.safeParse(
              insertedMessage[0],
            );
            if (!validatedFirstMessage.success) {
              console.error(
                "Failed to validate initial AI message:",
                validatedFirstMessage.error,
              );
              return c.json(
                { error: "Internal server error validating initial message" },
                500,
              );
            }
            // Return the first message in an array
            return c.json([validatedFirstMessage.data]);
          } catch (convError) {
            console.error(
              "Error during conversation/initial message creation:",
              convError,
            );
            return c.json({ error: "Failed to initialize conversation" }, 500);
          }
        }

        const messagesList = await db.query.messagesTable.findMany({
          where: eq(schema.messagesTable.conversationId, conversation.id),
          orderBy: [asc(schema.messagesTable.createdAt)],
        });

        const validatedMessages = z
          .array(SelectMessageSchema)
          .safeParse(messagesList);
        if (!validatedMessages.success) {
          console.error(
            "Failed to validate messages from DB:",
            validatedMessages.error,
          );
          return c.json(
            { error: "Internal server error validating data" },
            500,
          );
        }

        return c.json(validatedMessages.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        return c.json({ error: "Failed to fetch messages" }, 500);
      }
    },
  )

  // Send a new message
  .post(
    "/conversation",
    zValidator(
      "json",
      // Use a union to accept either { message: ... } or { messages: [...] }
      z.union([
        z.object({ message: MessageSchema, address: z.string() }),
        z.object({ messages: z.array(MessageSchema), address: z.string() }),
      ]),
    ),
    async (c) => {
      const data = c.req.valid("json");
      const address = data.address;

      // Extract the last message, adapting to the input format
      const userMessage =
        "messages" in data
          ? data.messages[data.messages.length - 1]
          : data.message;
      if (!userMessage) {
        return c.json({ error: "No message found in payload" }, 400);
      }

      console.log("Processing message:", userMessage);
      console.log("From address:", address);

      try {
        const userId = await getUserIdFromContext(address);

        // Ensure user exists (idempotent check/creation)
        await db
          .insert(schema.usersTable)
          .values({ id: userId, walletAddress: address })
          .onConflictDoNothing();

        // Find the user's conversation
        const conversation = await db.query.conversationsTable.findFirst({
          where: eq(schema.conversationsTable.createdBy, userId),
          columns: { id: true },
        });

        if (!conversation) {
          console.error("Conversation not found for user:", userId);
          return c.json({ error: "Conversation not found" }, 404);
        }

        const aiClient = createAiClient({
          providerConfigs: {
            googleGeminiApiKey: serverEnv.GOOGLE_GEMINI_API_KEY,
          },
        });

        // Initialize Game Agent (can be done once outside if stateless)
        const gameAgent = createGameAgent({ deps: { aiClient, db }, userId });

        // Create chat history service instance for this request
        const chatHistoryService = createDrizzleChatHistoryService({
          db,
          conversationId: conversation.id,
          userId,
        });

        // Start streaming response
        const dataStream = createDataStream({
          execute: async (dataStreamWriter) => {
            await literalaiClient
              .thread({ name: `Conversation ${conversation.id}`, id: userId }) // Use userId as thread ID
              .wrap(async () => {
                // Log the user message as a step
                await literalaiClient
                  .step({
                    type: "user_message",
                    name: "User",
                    input: { content: userMessage.content }, // Log input here
                  })
                  .send();

                // Create a step for the agent processing
                const agentStep = literalaiClient.step({
                  type: "llm", // Or 'agent' if more appropriate
                  name: "GameAgent Stream",
                  input: { content: userMessage.content }, // Agent input is user message
                });

                try {
                  // Process with agent within the Literal AI step context
                  const dataAgentStream = await gameAgent.queryStream({
                    dataStreamWriter,
                    message: userMessage,
                    chatHistoryService,
                  });
                  dataAgentStream.mergeIntoDataStream(dataStreamWriter);

                  // Mark the agent step as complete (output might be harder to capture directly with streams)
                  // You might need a way to capture the final streamed output if needed for Literal AI logging.
                  // For now, we just mark it sent. We could potentially log the stream status or final message ID.
                  await agentStep.send();
                } catch (agentError) {
                  console.error(
                    "Error during game agent execution:",
                    agentError,
                  );
                  // Log error to Literal AI step
                  await agentStep.send();
                  // Re-throw error to be caught by the outer handler if necessary
                  throw agentError;
                }
              });
          },
          onError: (error) => {
            console.error("Streaming error", error);
            // Optionally log error to Literal AI here as well, though the step error handling might cover it.
            return error instanceof Error ? error.message : String(error);
          },
        });

        // Mark the response as a v1 data stream
        c.header("X-Vercel-AI-Data-Stream", "v1");
        c.header("Content-Type", "text/plain; charset=utf-8");

        return stream(c, (stream) => stream.pipe(dataStream));
      } catch (error) {
        console.error("Error processing message:", error);
        // Consider logging the overall error to Literal AI if not caught within the thread wrap
        return c.json({ error: "Failed to process message" }, 500);
      }
    },
  )


  // get progression data for a user
  .get(
    "/progression",
    zValidator("query", z.object({ address: z.string(), level: schema.Level })),
    async (c) => {
      const address = c.req.valid("query").address;
      const level = c.req.valid("query").level;
      const userId = await getUserIdFromContext(address);

      const progression = await db.query.levelProgressionTable.findMany({
        where: and(eq(schema.levelProgressionTable.userId, userId), eq(schema.levelProgressionTable.level, level)),
      });

      return c.json(progression);
    },
  );

export type AppType = typeof app;

async function getUserIdFromContext(address: string): Promise<UserId> {
  // check create user with wallet address
  const existingUser = await db.query.usersTable.findFirst({
    where: eq(schema.usersTable.walletAddress, address),
  });
  if (!existingUser) {
    const userId = typeIdGenerator("user");
    await db
      .insert(schema.usersTable)
      .values({ id: userId, walletAddress: address });
    return userId;
  }
  return existingUser.id;
}
