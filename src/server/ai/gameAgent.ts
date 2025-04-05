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
  levelProgressionTable,
  type Level1PictureSchema,
  type Level1SheetSchema,
} from "../db/chat/chat.db";
import type { db } from "../db/db";
import { generateCharacterPic } from "./generateCharacterPic";
import { sheetMakerPromptGenerator } from "./prompts/02-SheetMaker";
import { eq } from "drizzle-orm";
const systemPrompt = async (props: { db: db; userId: UserId }) => {
  const { db, userId } = props;
  const levelProgression = await db.query.levelProgressionTable.findMany({
    where: eq(levelProgressionTable.userId, userId),
  });

  // if there is no level progression, return the pic prompt
  if (levelProgression.length === 0) {
    return picPromptGenerator();
  }

  // if there is a level progression, return the next level prompt
  const latestLevel = levelProgression[levelProgression.length - 1];
  if (latestLevel.level === "level1-picture") {
    return sheetMakerPromptGenerator();
  }

  return picPromptGenerator();
};

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
      level: z.enum(["pic", "sheet"]),
      data: z.record(z.string(), z.record(z.string(), z.string())),
    }),
    execute: async (args) => {
      switch (args.level) {
        case "pic": {
          console.log({
            msg: "Finish level tool, pic should be generated now",
            args,
          });

          const image = await generateCharacterPic({
            aiClient,
            prompt: args.data,
          });

          // insert into database the fact that the level was finished
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
          console.log({
            msg: "Finish level tool, sheet should be generated now",
            args,
          });
          // save the sheet to the database
          await db.insert(levelProgressionTable).values({
            level: "level1-sheet",
            userId: props.userId,
            data: {
              type: "level1-sheet",
              prompt: args.data,
              characterSheet: args.data,
            } satisfies Level1SheetSchema,
          });
          return {
            msg: "Sheet generated and user moved to next level",
          };
        }
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
        msg: "Messages sent to AI",
        messages: messagesForAi,
      });

      console.debug({
        msg: "System prompt",
        systemPrompt,
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
          modelId: "gemini-2.0-flash-exp",
          provider: "google",
        }),
        experimental_generateMessageId: () => typeIdGenerator("message"),
      });

      return result;
    },
  };
};

export type GameAgent = ReturnType<typeof createGameAgent>;
