"use client";

import type React from "react";
import { useChat, type Message } from "@ai-sdk/react";

import { ChatContainer } from "@/components/chat/ChatContainer";
import { AIMessage } from "@/components/chat/AIMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { ChatInputBar } from "@/components/chat/ChatInputBar";

export function ChatInterface({ messages }: { messages: Message[] }) {
  const chat = useChat({
    api: "/api/conversation",
    initialMessages: messages,
  });

  const handleSendMessage = async (content: string) => {
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
