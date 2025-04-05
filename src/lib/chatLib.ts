import type { Message } from "ai";
import { apiClient } from "./apiClient";
import { z } from "zod";

export const MessageSchema = z.custom<Omit<Message, "data" | "annotations">>();
export type MessageSchema = z.infer<typeof MessageSchema>;

export const getConversation = async (address: string) => {
  const convo = await apiClient.conversation.$get({
    query: { address },
  });
  if (convo.status !== 200) {
    throw new Error("Failed to get conversation");
  }
  const data = await convo.json();
  return data;
};