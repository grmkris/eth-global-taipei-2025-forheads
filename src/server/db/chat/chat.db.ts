import type { Message } from "ai";
import { jsonb, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import {
  typeId,
  typeIdGenerator,
  type ConversationId,
  type MessageId,
  type UserId,
} from "@/server/db/typeid";

export const usersTable = pgTable("users", {
  id: typeId("user", "id")
    .primaryKey()
    .$defaultFn(() => typeIdGenerator("user"))
    .$type<UserId>(),
  walletAddress: varchar("wallet_address").notNull(),
});

// Conversations table
export const conversationsTable = pgTable("conversations", {
  id: typeId("conversation", "id")
    .primaryKey()
    .$defaultFn(() => typeIdGenerator("conversation"))
    .$type<ConversationId>(),
  title: varchar("title", { length: 255 }).notNull(),
  createdBy: typeId("user", "created_by")
    .notNull()
    .references(() => usersTable.id)
    .$type<UserId>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Messages table
export const messagesTable = pgTable("messages", {
  id: typeId("message", "id")
    .primaryKey()
    .$defaultFn(() => typeIdGenerator("message"))
    .$type<MessageId>(),
  conversationId: typeId("conversation", "conversation_id")
    .notNull()
    .references(() => conversationsTable.id)
    .$type<ConversationId>(),
  message: jsonb("message").$type<Message>().notNull(),
  createdBy: typeId("user", "created_by")
    .notNull()
    .references(() => usersTable.id)
    .$type<UserId>(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
