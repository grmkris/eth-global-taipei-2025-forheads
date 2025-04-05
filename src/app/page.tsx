"use client";
import { ChatInterface } from "@/app/_lib/ChatInterface";
import ConnectButton from "@/components/web3/connect-button";
import { useConversation } from "@/lib/chatHooks";
import type { Message } from "ai";
import { useAccount } from "wagmi";

export const runtime = "edge";

export default function Home() {
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

  const conversationId = conversation.data?.[0].conversationId;
  if (!conversationId) {
    return <div>No conversation found</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Render the client component */}
      <ChatInterface messages={initalMessages} conversationId={conversationId} />
      {/* Remove the previous chat container and input bar JSX */}
      <ConnectButton /> 
    </div>
  );
}
