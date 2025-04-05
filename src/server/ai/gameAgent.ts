import {
	type DataStreamWriter,
	type Message,
	appendClientMessage,
	appendResponseMessages,
} from "ai";
import { typeIdGenerator } from "@/server/db/typeid";
import type { AiClient } from "./aiClient";
import type { ChatHistoryService } from "./chatHistoryService";

const systemPrompt = `
You are a helpful assistant participating in a guessing game. Ask questions to figure out what the user is thinking.
`;

export const createGameAgent = (props: {
	deps: {
		aiClient: AiClient;
	};
}) => {
	const { aiClient } = props.deps;

	return {
		queryStream: async (params: {
			message: Message;
			chatHistoryService: ChatHistoryService;
			onFinish?: (messages: Message[]) => void;
			onStepFinish?: (messages: Message[]) => void;
			onError?: (error: { error: unknown }) => void;
			dataStreamWriter: DataStreamWriter;
		}) => {
			const { message, chatHistoryService, onFinish, onStepFinish, onError } = params;

			const existingConversation = await chatHistoryService.getConversationMessages();
			await chatHistoryService.addUserMessage(message);

			const messagesForAi = appendClientMessage({
				messages: existingConversation,
				message: message,
			});

			console.log({
				msg: "Messages sent to AI",
				messages: messagesForAi,
			});

			const systemPromptWithDatasources = systemPrompt;

			console.debug({
				msg: "System prompt",
				systemPromptWithDatasources,
			});

			const result = aiClient.streamText({
				toolCallStreaming: true,
				onFinish: (result) => {
					const newMessages = appendResponseMessages({
						messages: messagesForAi,
						responseMessages: result.response.messages,
					});
					const justNewMessages = newMessages.filter(
						(m) => !messagesForAi.map((orig) => orig.id).includes(m.id),
					);
					console.debug({
						msg: "Agent finished, just new messages:",
						justNewMessages,
					});
					onFinish?.(justNewMessages);
				},
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
					onStepFinish?.(justNewMessages);
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
				system: systemPromptWithDatasources,
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
