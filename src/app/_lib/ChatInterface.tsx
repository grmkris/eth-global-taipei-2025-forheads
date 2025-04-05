"use client";

import type React from "react";
import { useChat, type Message } from "@ai-sdk/react";

import { ChatContainer } from "@/components/chat/ChatContainer";
import { AIMessage } from "@/components/chat/AIMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { ChatInputBar } from "@/components/chat/ChatInputBar";
import { typeIdGenerator } from "@/server/db/typeid";
import { useAccount } from "wagmi";
import { useConversation } from "@/lib/chatHooks";
import ConnectButton from "@/components/web3/connect-button";

export function ChatInterface() {
  const { address } = useAccount();
  const conversation = useConversation({
    address: address,
  });
  const initalMessages: Message[] = [];
  for (const m of conversation.data ?? []) {
    initalMessages.push({
      ...m.message,
      createdAt: m.message.createdAt
        ? new Date(m.message.createdAt)
        : undefined,
    });
  }

  const chat = useChat({
    api: "/api/conversation",
    id: conversation.data?.[0].conversationId,
    onToolCall: (toolCall) => {
      console.log("useChat onToolCall", toolCall);
    },
    onFinish: async (message) => {
      console.log("useChat onFinish", message);
    },
    generateId: () => typeIdGenerator("message"),
    credentials: "include",
    initialMessages: initalMessages,
    onResponse: (response) => {
      console.log("useChat onResponse", response);
    },
    sendExtraMessageFields: true,
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
                      fullMessage={message}
                      avatarFallback="AI" // Add default fallback
                    />
                  );
                default:
                  return (
                    <div key={message.id}>
                      <pre>{JSON.stringify(message, null, 2)}</pre>
                    </div>
                  );
              }
            })}
          </div>
        )}
      </ChatContainer>
      {/* Use your ChatInputBar component */}
      <ChatInputBar onSendMessage={handleSendMessage} />
      <ConnectButton />
    </div>
  );
}
