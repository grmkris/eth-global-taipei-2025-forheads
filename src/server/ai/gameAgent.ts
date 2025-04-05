import {
  type DataStreamWriter,
  type Message,
  appendClientMessage,
  appendResponseMessages,
  tool,
} from "ai";
import { typeIdGenerator } from "@/server/db/typeid";
import type { AiClient } from "./aiClient";
import type { ChatHistoryService } from "./chatHistoryService";
import { picPromptGenerator } from "./prompts/01-Pic";
import { z } from "zod";

const systemPrompt = picPromptGenerator();

export const createGameAgent = (props: {
  deps: {
    aiClient: AiClient;
  };
}) => {
  const { aiClient } = props.deps;

  const finishLevelTool = tool({
    description: "Call this tool to finish the level",
    parameters: z.object({
      level: z.enum(["pic", "sheet"]),
      prompt: z.string(),
    }),
    execute: async (args) => {
      switch (args.level) {
        case "pic":
          console.log({
            msg: "Finish level tool, pic should be generated now",
            args,
          });
          return {
            msg: "Pic should be generated now",
          };
        case "sheet":
          return {
            msg: "Sheet should be generated now",
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
        system: systemPrompt,
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
