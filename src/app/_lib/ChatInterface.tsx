"use client";

import type React from "react";
import { useChat, type Message } from "@ai-sdk/react";

import { ChatContainer } from "@/components/chat/ChatContainer";
import { AIMessage } from "@/components/chat/AIMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { ChatInputBar } from "@/components/chat/ChatInputBar";
import { typeIdGenerator, type ConversationId } from "@/server/db/typeid";
import { useAccount } from "wagmi";

export function ChatInterface(props: { messages: Message[], conversationId: ConversationId }) {
  const { address } = useAccount();
  const chat = useChat({
    api: "/api/conversation",
    id: props.conversationId,
    onToolCall: (toolCall) => {
      console.log("useChat onToolCall", toolCall);
    },
    onFinish: async (message) => {
      console.log("useChat onFinish", message);
    },
    generateId: () => typeIdGenerator("message"),
    credentials: "include",
    initialMessages: props.messages,
    onResponse: (response) => {
      console.log("useChat onResponse", response);
    },
    sendExtraMessageFields: true,
    // only send the last message to the server:
    // https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot-message-persistence#sending-only-the-last-message
    experimental_prepareRequestBody({ messages, id }) {
      return { message: messages[messages.length - 1], id, address };
    },
  });

  const handleSendMessage = async (content: string) => {
    console.log("handleSendMessage", content);
    if (!content.trim()) return;
    chat.append({
      content,
      role: "user",
    });
  };

  return (
    <div className="flex flex-col h-full">
      {" "}
      {/* Adjust height if needed, assuming parent provides height */}
      {/* Use ChatContainer for the main chat display */}
      <ChatContainer className="flex-1 overflow-y-auto">
        {chat.messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">
              Send a message to start the chat.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {" "}
            {/* Use flex-col and gap like original */}
            {chat.messages.map((message) => {
              switch (message.role) {
                case "user":
                  return (
                    <UserMessage
                      key={message.id}
                      message={message.content}
                      avatarFallback="U" // Add default fallback
                    />
                  );
                case "assistant":
                  return (
                    <AIMessage
                      key={message.id}
                      message={message.content}
                      avatarFallback="AI" // Add default fallback
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        )}
      </ChatContainer>
      {/* Use your ChatInputBar component */}
      <ChatInputBar onSendMessage={handleSendMessage} />
    </div>
  );
}
