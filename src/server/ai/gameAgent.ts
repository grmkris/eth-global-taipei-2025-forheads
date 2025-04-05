import {
  type DataStreamWriter,
  type Message,
  appendClientMessage,
  appendResponseMessages,
  tool,
} from "ai";
import { typeIdGenerator, type UserId } from "@/server/db/typeid";
import type { AiClient } from "./aiClient";
import type { ChatHistoryService } from "./chatHistoryService";
import { picPromptGenerator } from "./prompts/01-Pic";
import { z } from "zod";
import {
  type Level1Schema,
  levelProgressionTable,
  type CharacterSchema,
  type Level1PictureSchema,
  type Level1SheetSchema,
  type Level2Schema,
} from "../db/chat/chat.db";
import type { db } from "../db/db";
import { generateCharacterPic } from "./generateCharacterPic";
import { generateCharacterSheet } from "./generateCharacterPic";
import { sheetMakerPromptGenerator } from "./prompts/02-SheetMaker";
import { desc, eq } from "drizzle-orm";
import { level1PromptGenerator } from "./prompts/03-Level1";
import { level2PromptGenerator } from "./prompts/04-Level2";

const systemPrompt = async (props: { db: db; userId: UserId }) => {
  const { db, userId } = props;
  const levelProgression = await db.query.levelProgressionTable.findMany({
    where: eq(levelProgressionTable.userId, userId),
  });

  // if there is no level progression, return the pic prompt
  if (levelProgression.length === 0) {
    return picPromptGenerator();
  }

  const latestLevel = levelProgression[levelProgression.length - 1];

  switch (latestLevel.data.type) {
    case "level1-picture": {  
      return sheetMakerPromptGenerator();
    }
    case "level1-sheet": {
      return level1PromptGenerator({
        characterSheet: latestLevel.data.characterSheet,
      });
    }
    case "level1": {
      return level1PromptGenerator({
        characterSheet: latestLevel.data.characterSheet,
      });
    }
    case "level2": {
      return level2PromptGenerator({
        characterSheet: latestLevel.data.characterSheet,
      });
    }
  }
}

export const AGENT_LEVELS = ["pic", "sheet", "level1", "level2"] as const;
export const AgentLevel = z.enum(AGENT_LEVELS);
export type AgentLevel = z.infer<typeof AgentLevel>;

export const createGameAgent = (props: {
  deps: {
    aiClient: AiClient;
    db: db;
  };
  userId: UserId;
}) => {
  const { aiClient, db } = props.deps;

  const finishLevelTool = tool({
    description: "Call this tool to finish the level",
    parameters: z.object({
      level: AgentLevel,
      data: z.string(),
    }),
    execute: async (args) => {
      try {
        switch (args.level) {

          case "pic": {
            const image = await generateCharacterPic({
              aiClient,
              prompt: args.data,
            });
            await db.insert(levelProgressionTable).values({
              level: "level1-picture",
              userId: props.userId,
              data: {
                type: "level1-picture",
                prompt: args.data,
                image: image,
              } satisfies Level1PictureSchema,
            });
            return {
              msg: "Picture generated and user moved to next level",
            };
          }
          case "sheet": {
            const characterSheet = await generateCharacterSheet({
              aiClient,
              prompt: args.data,
            });
            // save the sheet to the database
            await db.insert(levelProgressionTable).values({
              level: "level1-sheet",
              userId: props.userId,
              data: {
                type: "level1-sheet",
                prompt: args.data,
                characterSheet: characterSheet,
              } satisfies Level1SheetSchema,
            });
            return {
              msg: "Sheet generated and user moved to next level",
            };
          }
          case "level1": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, props.userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.type !== "level1-sheet") {
              throw new Error("User is not in level 1");
            }
            const result = await completeLevel1({
              characterSheet: latestLevel.data.characterSheet,
            });
            console.log({
              msg: "Level 1 generated and user moved to next level",
              result,
            });
            await db.insert(levelProgressionTable).values({
              level: "level1",
              userId: props.userId,
              data: {
                type: "level1",
                prompt: args.data,
                characterSheet: result.characterSheet,
                level1Summary: result.level1Summary,
              } satisfies Level1Schema,
            });
            return {
              msg: "Level 1 generated and user moved to next level",
            };
          }

          case "level2": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, props.userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.type !== "level1") {
              throw new Error("User is not in level 1");
            }
            const result = await completeLevel2({
              characterSheet: latestLevel.data.characterSheet,
            });
            await db.insert(levelProgressionTable).values({
              level: "level2",
              userId: props.userId,
              data: result,
            });
            return {
              msg: "Level 2 generated and user moved to next level",
            };
          } 
        }
      } catch (error) {
        console.error({
          msg: "Error in finish level tool",
          error,
        });
        return {
          msg: "Error in finish level tool, ask the user to try again",
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
  });

  return {
    queryStream: async (params: {
      message: Message;
      chatHistoryService: ChatHistoryService;
      onError?: (error: { error: unknown }) => void;
      dataStreamWriter: DataStreamWriter;
    }) => {
      const { message, chatHistoryService, onError } = params;

      const existingConversation =
        await chatHistoryService.getConversationMessages();
      await chatHistoryService.addUserMessage(message);

      const messagesForAi = appendClientMessage({
        messages: existingConversation,
        message: message,
      });

      console.log({
        messagesForAi: messagesForAi.length,
      });

      const result = aiClient.streamText({
        tools: {
          finishLevel: finishLevelTool,
        },
        toolCallStreaming: true,
        onStepFinish: async (result) => {
          const newMessagesAndOld = appendResponseMessages({
            messages: messagesForAi,
            responseMessages: result.response.messages,
          });

          const justNewMessages = newMessagesAndOld.filter(
            (m) => !messagesForAi.map((orig) => orig.id).includes(m.id),
          );

          console.debug({
            msg: "Agent step finished, new messages:",
            justNewMessages,
          });

          await chatHistoryService.addAgentMessages(justNewMessages);
        },
        onError: (error) => {
          console.error({
            msg: "Agent error",
            error,
          });
          onError?.(error);
        },
        maxSteps: 5,
        messages: messagesForAi,
        system: await systemPrompt({ db, userId: props.userId }),
        model: aiClient.getModel({
          modelId: "gemini-2.5-pro-exp-03-25",
          provider: "google",
        }),
        experimental_generateMessageId: () => typeIdGenerator("message"),
      });

      return result;
    },
  };
};

export type GameAgent = ReturnType<typeof createGameAgent>;
async function completeLevel1(props: {
  characterSheet: CharacterSchema;
}) {
  console.log("completeLevel1", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level1Summary: "This is a test",
    prompt: "This is a test",
    type: "level1",
  } satisfies Level1Schema;
}

async function completeLevel2(props: {
  characterSheet: CharacterSchema;
}) {
  console.log("completeLevel2", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level2Summary: "This is a test",
    prompt: "This is a test",
    type: "level2",
  } satisfies Level2Schema;
}
