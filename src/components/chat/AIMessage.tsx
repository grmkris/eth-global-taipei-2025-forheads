import type * as React from "react";
import { MessageBubble } from "./MessageBubble";

type AIMessageProps = Omit<
  React.ComponentProps<typeof MessageBubble>,
  "variant"
>;

function AIMessage({ ...props }: AIMessageProps) {
  // Here you could add logic later to parse message props and render dynamic content
  return <MessageBubble variant="ai" {...props} />;
}

export { AIMessage };
