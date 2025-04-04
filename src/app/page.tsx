"use client"; // Need this for useState and event handlers

import * as React from "react";

import { ChatContainer } from "@/components/chat/ChatContainer";
import { AIMessage } from "@/components/chat/AIMessage";
import { UserMessage } from "@/components/chat/UserMessage";
import { TypingSystemMessage } from "@/components/chat/TypingSystemMessage";
import { ChatInputBar } from "@/components/chat/ChatInputBar";

// Define a type for our messages
interface Message {
  id: string; // Unique ID for each message
  type: "user" | "ai" | "system";
  content: React.ReactNode;
  avatarFallback?: string;
  avatarSrc?: string;
  timestamp?: string; // Add timestamp if desired
}

export default function Home() {
  const [messages, setMessages] = React.useState<Message[]>([
    // Initial placeholder message
    {
      id: "sys-init",
      type: "system",
      content: "Who are you?",
    },
    // { id: "sys-1", type: "system", content: "Chat session started." },
    // {
    //   id: "ai-1",
    //   type: "ai",
    //   content: "Greetings, adventurer! How may I assist you today?",
    //   avatarFallback: "AI",
    //   timestamp: "10:30 AM",
    // },
    // {
    //   id: "user-1",
    //   type: "user",
    //   content: "I seek the lost map of Eldoria!",
    //   avatarFallback: "U",
    //   timestamp: "10:31 AM",
    // },
    //  {
    //   id: "ai-2",
    //   type: "ai",
    //   content: "Ah, a noble quest! The map is said to be hidden within the Whispering Caves, guarded by ancient riddles.",
    //   avatarFallback: "AI",
    //   timestamp: "10:32 AM",
    // },
  ]);

  // State to control when the input bar appears
  const [showInput, setShowInput] = React.useState(false);

  const handleSendMessage = (newMessageContent: string) => {
    const newUserMessage: Message = {
      id: `user-${Date.now()}`, // Simple unique ID generation
      type: "user",
      content: newMessageContent,
      avatarFallback: "U",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }), // Simple timestamp
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // TODO: Add logic here to simulate or call AI response
  };

  return (
    // Main container for the chat interface
    <div className="flex flex-col h-screen bg-background">
      <ChatContainer className="flex-1 overflow-y-auto">
        {/* Render messages */}
        <div className="flex flex-col gap-4">
          {" "}
          {/* Add gap between messages */}
          {messages.map((msg) => {
            switch (msg.type) {
              case "user":
                return (
                  <UserMessage
                    key={msg.id}
                    message={msg.content}
                    avatarFallback={msg.avatarFallback}
                    avatarSrc={msg.avatarSrc}
                    timestamp={msg.timestamp}
                  />
                );
              case "ai":
                return (
                  <AIMessage
                    key={msg.id}
                    message={msg.content}
                    avatarFallback={msg.avatarFallback}
                    avatarSrc={msg.avatarSrc}
                    timestamp={msg.timestamp}
                  />
                );
              case "system":
                // Use TypingSystemMessage only for the initial message
                if (msg.id === "sys-init") {
                  return (
                    <TypingSystemMessage
                      key={msg.id}
                      message={msg.content as string} // Cast content to string
                      onComplete={() => setShowInput(true)} // Show input after typing finishes
                    />
                  );
                }
                // For other system messages, we might use the regular SystemMessage or another component
                // For now, let's just render null or a basic div for other system messages if needed later
                return (
                  <div
                    key={msg.id}
                    className="flex justify-center items-center my-2"
                  >
                    <div className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm shadow-sm">
                      {msg.content}
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </ChatContainer>

      {/* Conditionally render Input bar */}
      {showInput && <ChatInputBar onSendMessage={handleSendMessage} />}
    </div>
  );
}
