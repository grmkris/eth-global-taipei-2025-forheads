import type { Message } from "ai";
import { jsonb, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import {
  typeId,
  typeIdGenerator,
  type ConversationId,
  type LevelProgressionId,
  type MessageId,
  type UserId,
} from "@/server/db/typeid";
import { z } from "zod";

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
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
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

export const LEVELS = ["level1-picture", "level1-sheet"] as const;
export const Level = z.enum(LEVELS);
export type Level = z.infer<typeof Level>;
export const Level1PictureSchema = z.object({
  type: z.literal(Level.enum["level1-picture"]),
  prompt: z.record(z.string(), z.record(z.string(), z.string())),
  image: z.string(), // base64 encoded image
});
export type Level1PictureSchema = z.infer<typeof Level1PictureSchema>;

export const Level1SheetSchema = z.object({
  type: z.literal(Level.enum["level1-sheet"]),
  prompt: z.record(z.string(), z.record(z.string(), z.string())),
  characterSheet: z.record(z.string(), z.record(z.string(), z.string())),
});
export type Level1SheetSchema = z.infer<typeof Level1SheetSchema>;

export const LevelProgressionDataSchema = z.union([
  Level1PictureSchema,
  Level1SheetSchema,
]);
export type LevelProgressionDataSchema = z.infer<
  typeof LevelProgressionDataSchema
>;

/**
 * Everytime a character makes a progress, we store it here, so we can track the progress of the character
 */
export const levelProgressionTable = pgTable("level_progression", {
  id: typeId("levelProgression", "id")
    .primaryKey()
    .$defaultFn(() => typeIdGenerator("levelProgression"))
    .$type<LevelProgressionId>(),
  level: text("level", { enum: LEVELS }).notNull().$type<Level>(),
  userId: typeId("user", "user_id")
    .notNull()
    .references(() => usersTable.id)
    .$type<UserId>(),
  data: jsonb("data").$type<LevelProgressionDataSchema>().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
