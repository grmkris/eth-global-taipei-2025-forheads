import type * as React from "react";
import { MessageBubble } from "./MessageBubble";

type UserMessageProps = Omit<
  React.ComponentProps<typeof MessageBubble>,
  "variant"
>;

function UserMessage({ message, ...props }: UserMessageProps) {
  // Format message content if it's a string to ensure consistent rendering
  const formattedMessage =
    typeof message === "string" ? (
      <span className="block whitespace-pre-wrap">{message}</span>
    ) : (
      message
    );

  return <MessageBubble variant="user" message={formattedMessage} {...props} />;
}

export { UserMessage };
