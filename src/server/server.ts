import * as schema from "./db/schema";
import { typeIdGenerator, type UserId } from "./db/typeid";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { eq, asc } from "drizzle-orm";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";
import { logger } from "hono/logger";
import { Hono, type Context } from "hono";
import { SelectMessageSchema, MessageSchema } from "./db/chat/chat.zod";
import { createDb } from "./db/db";
import { serverEnv } from "./serverEnv";
import type { Message } from "ai";

const db = createDb({
  logger: {
    logQuery: (query) => console.log(query),
  },
  dbUrl: serverEnv.DATABASE_URL,
});

// Create the Hono app
export const app = new Hono()
  .use(requestId())
  .use(logger())
  .use(
    "*",
    cors({
      origin: ["http://localhost:3000", "YOUR_FRONTEND_URL"],
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE", "PATCH"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  )
  .get("/conversation", async (c) => {
    const userId = await getUserIdFromContext(c);

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
            return c.json({ error: "Failed to initialize conversation" }, 500);
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
        return c.json({ error: "Internal server error validating data" }, 500);
      }

      return c.json(validatedMessages.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      return c.json({ error: "Failed to fetch messages" }, 500);
    }
  })

  // Send a new message
  .post(
    "/conversation",
    zValidator("json", z.object({ message: MessageSchema })),
    async (c) => {
      const { message } = c.req.valid("json");
      const userId = await getUserIdFromContext(c);

      // check if user exists, if not create a new user
      const user = await db.query.usersTable.findFirst({
        where: eq(schema.usersTable.id, userId),
      });
      if (!user) {
        await db.insert(schema.usersTable).values({ id: userId, walletAddress: userId });
      } 

      try {
        const conversation = await db.query.conversationsTable.findFirst({
          where: eq(schema.conversationsTable.createdBy, userId),
          columns: { id: true },
        });

        if (!conversation) {
          return c.json(
            { error: "Conversation not found or access denied" },
            404,
          );
        }

        const newMessageId = typeIdGenerator("message");

        const inserted = await db
          .insert(schema.messagesTable)
          .values({
            id: newMessageId,
            conversationId: conversation.id,
            message: message,
            createdBy: userId,
          })
          .returning();

        if (inserted.length === 0) {
          return c.json({ error: "Failed to create message" }, 500);
        }

        const validatedMessage = SelectMessageSchema.safeParse(inserted[0]);
        if (!validatedMessage.success) {
          console.error(
            "Failed to validate created message:",
            validatedMessage.error,
          );
          return c.json(
            { error: "Internal server error validating data" },
            500,
          );
        }

        return c.json(validatedMessage.data, 201);
      } catch (error) {
        console.error("Error creating message:", error);
        return c.json({ error: "Failed to create message" }, 500);
      }
    },
  );

export type AppType = typeof app;

async function getUserIdFromContext(): Promise<UserId> {
  const userId = typeIdGenerator("user");
  console.log("getUserIdFromContext");
  // check if user exists, if not create a new user
  const user = await db.query.usersTable.findFirst({
    where: eq(schema.usersTable.id, userId),
  });
  if (!user) {
    await db.insert(schema.usersTable).values({ id: userId, walletAddress: userId });
  } 
  return userId satisfies UserId;
}
