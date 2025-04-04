import type { Message } from "ai";
import { apiClient } from "./apiClient";
import { z } from "zod";

export const MessageSchema = z.custom<Omit<Message, "data" | "annotations">>();
export type MessageSchema = z.infer<typeof MessageSchema>;

export const getConversation = async () => {
  const convo = await apiClient.conversation.$get();
  if (convo.status !== 200) {
    throw new Error("Failed to get conversation");
  }
  const data = await convo.json();
  return data;
};

export const sendMessage = async (message: MessageSchema) => {
  const convo = await apiClient.conversation.$post({
    json: { message: message },
  });
  return convo;
};
