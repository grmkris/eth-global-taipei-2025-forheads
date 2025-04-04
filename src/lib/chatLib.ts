import type { Message } from "ai";
import { apiClient } from "./apiClient";
import { z } from "zod";


export const MessageSchema = z.custom<Omit<Message, "data" | "annotations">>();
export type MessageSchema = z.infer<typeof MessageSchema>;

export const getConversation = async () => {
  const convo = await apiClient.conversation.$get();
  return convo;
};

export const sendMessage = async (message: MessageSchema) => {
  const convo = await apiClient.conversation.$post({
    json: { message: message },
  });
  return convo;
};
