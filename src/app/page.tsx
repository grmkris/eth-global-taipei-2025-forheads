import { ChatInterface } from "@/app/_lib/ChatInterface";
import ConnectButton from "@/components/web3/connect-button";
import { getConversation } from "@/lib/chatLib";
import type { Message } from "ai";

export default async function Home() {
  const data = await getConversation();
  const initalMessages: Message[] = [];
  for (const m of data) {
    initalMessages.push({
      ...m.message,
      createdAt: m.message.createdAt
        ? new Date(m.message.createdAt)
        : undefined,
    });
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Render the client component */}
      <ChatInterface messages={initalMessages} conversationId={data[0].conversationId} />
      {/* Remove the previous chat container and input bar JSX */}
      <ConnectButton /> 
    </div>
  );
}
