import { ChatInterface } from "@/app/_lib/ChatInterface";
import { getConversation } from "@/lib/chatLib";
import type { Message } from "ai";

export default async function Home() {
  const data = await getConversation();
  const initalMessages: Message[] = [];
  for (const m of data) {
    initalMessages.push({
      content: m.message.content,
      role: m.message.role,
      id: m.message.id,
      annotations: m.message.annotations,
      experimental_attachments: m.message.experimental_attachments,
      parts: m.message.parts,
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
    </div>
  );
}
