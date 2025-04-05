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

// Define the Zod enum for NFT minting status
export const NFT_MINT_STATUSES = [
  'NOT_MINTED', 
  'MINTED', 
  'MINTING_FAILED'
] as const;
export const NftMintStatus = z.enum(NFT_MINT_STATUSES);
export type NftMintStatus = z.infer<typeof NftMintStatus>;

export const usersTable = pgTable("users", {
  id: typeId("user", "id")
    .primaryKey()
    .$defaultFn(() => typeIdGenerator("user"))
    .$type<UserId>(),
  walletAddress: varchar("wallet_address").notNull(),
  nftContractAddress: varchar("nft_contract_address"),
  profileNftStatus: text("profile_nft_status", { enum: NFT_MINT_STATUSES })
    .default(NftMintStatus.enum.NOT_MINTED)
    .notNull()
    .$type<NftMintStatus>(),
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

export const LEVELS = ["level1-picture", "level1-sheet", "level1", "level2"] as const;
export const Level = z.enum(LEVELS);
export type Level = z.infer<typeof Level>;
export const Level1PictureSchema = z.object({
  type: z.literal(Level.enum["level1-picture"]),
  prompt: z.string(),
  image: z.string(), // base64 encoded image
});
export type Level1PictureSchema = z.infer<typeof Level1PictureSchema>;

// Define the Character schema
export const CharacterSchema = z.object({
  character: z.object({
    name: z.string(),
    race: z.string(),
    class: z.string(),
    level: z.number().int().min(0),
    background: z.string(),
    alignment: z.string(),
    experience: z.number().int().min(0),
  }),

  attributes: z.object({
    strength: z.number().int().min(0),
    dexterity: z.number().int().min(0),
    constitution: z.number().int().min(0),
    intelligence: z.number().int().min(0),
    wisdom: z.number().int().min(0),
    charisma: z.number().int().min(0),
  }),

  status: z.object({
    max_hp: z.number().int().nullable(),
    current_hp: z.number().int().nullable(),
    armor_class: z.number().int().nullable(),
    initiative: z.number().int().nullable(),
    speed: z.number().int().nullable(),
    passive_perception: z.number().int().nullable(),
  }),

  proficiencies: z.object({
    saving_throws: z.array(z.string()),
    skills: z.array(z.string()),
    languages: z.array(z.string()),
    weapons: z.array(z.string()),
    armor: z.array(z.string()),
    tools: z.array(z.string()),
  }),

  inventory: z.object({
    equipment: z.array(
      z.object({
        name: z.string(),
        equipped: z.boolean(),
        description: z.string(),
      }),
    ),
    consumables: z.array(
      z.object({
        name: z.string(),
        quantity: z.number().int().min(0),
        description: z.string(),
      }),
    ),
    valuables: z.array(
      z.object({
        name: z.string(),
        quantity: z.number().int().min(0),
      }),
    ),
    other_items: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),
    carry_capacity: z.object({
      current_weight: z.number().min(0),
      maximum_weight: z.number().min(0),
    }),
  }),

  relationships: z.object({
    allies: z.array(
      z.object({
        name: z.string(),
        location: z.string(),
        disposition: z.number().int(),
        notes: z.string(),
      }),
    ),
    enemies: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        status: z.string(),
      }),
    ),
    neutral: z.array(
      z.object({
        name: z.string(),
        disposition: z.number().int(),
        notes: z.string(),
      }),
    ),
  }),
});

// Export the schema
export type CharacterSchema = z.infer<typeof CharacterSchema>;

export const Level1SheetSchema = z.object({
  type: z.literal(Level.enum["level1-sheet"]),
  prompt: z.string(),
  characterSheet: CharacterSchema,
});
export type Level1SheetSchema = z.infer<typeof Level1SheetSchema>;

export const Level1Schema = z.object({
  type: z.literal(Level.enum.level1),
  prompt: z.string(),
  characterSheet: CharacterSchema,
  level1Summary: z.string(),
});
export type Level1Schema = z.infer<typeof Level1Schema>;

export const Level2Schema = z.object({
  type: z.literal(Level.enum.level2),
  prompt: z.string(),
  characterSheet: CharacterSchema,
  level2Summary: z.string(),
});
export type Level2Schema = z.infer<typeof Level2Schema>;

export const LevelProgressionDataSchema = z.union([
  Level1PictureSchema,
  Level1SheetSchema,
  Level1Schema,
  Level2Schema,
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

export const ToolName2LevelMap = {
  "pic": "level1-picture",
  "sheet": "level1-sheet",
  "level1": "level1",
  "level2": "level2",
} as const;
export type ToolName2LevelMap = typeof ToolName2LevelMap;

