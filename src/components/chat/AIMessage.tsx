import { useState } from "react";
import type { Message } from "@ai-sdk/react";
import { MessageBubble } from "./MessageBubble";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming you have Card components

type AIMessageProps = Omit<
  React.ComponentProps<typeof MessageBubble>,
  "variant" | "message"
> & {
  fullMessage: Message;
};

function AIMessage({ fullMessage, ...props }: AIMessageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const renderPart = (
    part: NonNullable<Message["parts"]>[number],
    index: number,
  ) => {
    if (!part) return null;
    switch (part.type) {
      case "text":
        return <p key={index}>{part.text}</p>;
      case "tool-invocation":
        return (
          <Card key={index} className="my-2 bg-muted/50">
            <CardHeader className="p-2">
              <CardTitle className="text-sm">Tool Call: {part.type}</CardTitle>
            </CardHeader>
            <CardContent className="p-2 text-xs">
              <p>Args:</p>
              <pre className="whitespace-pre-wrap break-all bg-background p-1 rounded">
                {JSON.stringify(part.toolInvocation.args, null, 2)}
              </pre>
              {part.toolInvocation.args && (
                <>
                  <p className="mt-1">Result:</p>
                  <pre className="whitespace-pre-wrap break-all bg-background p-1 rounded">
                    {JSON.stringify(part.toolInvocation.args, null, 2)}
                  </pre>
                </>
              )}
            </CardContent>
          </Card>
        );
      case "step-start": // Assuming this is a type, render appropriately or ignore
        return (
          <p key={index} className="text-xs text-muted-foreground italic">
            Step Start
          </p>
        );
      // Add cases for other part types if needed
      default:
        return (
          <pre key={index} className="text-xs bg-muted/30 p-1 rounded my-1">
            {JSON.stringify(part, null, 2)}
          </pre>
        );
    }
  };

  // Display final content by default, or detailed parts when expanded
  const messageContent = isExpanded ? (
    <div className="flex flex-col gap-1">
      {fullMessage.parts?.map(renderPart)}
    </div>
  ) : (
    fullMessage.content
  );

  return (
    <MessageBubble
      variant="ai"
      message={messageContent}
      onClick={toggleExpand}
      className="cursor-pointer" // Add cursor pointer to indicate clickability
      {...props}
    />
  );
}

export { AIMessage };
