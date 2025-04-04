import * as schema from "./db/schema";
import {
  typeIdGenerator,
  type UserId,
} from "./db/typeid";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { eq, asc } from "drizzle-orm";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";
import { logger } from "hono/logger";
import { Hono, type Context } from "hono";
import {
  SelectMessageSchema,
  MessageSchema,
} from "./db/chat/chat.zod";
import { createDb } from "./db/db";
import { serverEnv } from "./serverEnv";

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
  .get(
    "/conversation",
    async (c) => {
      const userId = getUserIdFromContext(c);

      try {
        const conversation = await db.query.conversationsTable.findFirst({
            where: eq(schema.conversationsTable.createdBy, userId),
            columns: { id: true }
        });

        if (!conversation) {
            return c.json({ error: "Conversation not found or access denied" }, 404);
        }

        const messagesList = await db.query.messagesTable.findMany({
          where: eq(schema.messagesTable.conversationId, conversation.id),
          orderBy: [asc(schema.messagesTable.createdAt)],
        });

        const validatedMessages = z.array(SelectMessageSchema).safeParse(messagesList);
        if (!validatedMessages.success) {
            console.error("Failed to validate messages from DB:", validatedMessages.error);
            return c.json({ error: "Internal server error validating data" }, 500);
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
      z.object({ message: MessageSchema })
    ),
    async (c) => {
      const { message } = c.req.valid("json");
      const userId = getUserIdFromContext(c);

      try {
         const conversation = await db.query.conversationsTable.findFirst({
            where: eq(schema.conversationsTable.createdBy, userId),
            columns: { id: true }
        });

        if (!conversation) {
            return c.json({ error: "Conversation not found or access denied" }, 404);
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
             console.error("Failed to validate created message:", validatedMessage.error);
            return c.json({ error: "Internal server error validating data" }, 500);
        }

        return c.json(validatedMessage.data, 201);
      } catch (error) {
        console.error("Error creating message:", error);
        return c.json({ error: "Failed to create message" }, 500);
      }
    },
  )

export type AppType = typeof app;


function getUserIdFromContext(c: Context) : UserId {
  console.log("getUserIdFromContext", c);
  return "usr_123" satisfies UserId;
}

