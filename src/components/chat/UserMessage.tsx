import type * as React from "react";
import { MessageBubble } from "./MessageBubble";

type UserMessageProps = Omit<
  React.ComponentProps<typeof MessageBubble>,
  "variant"
>;

function UserMessage({ ...props }: UserMessageProps) {
  return <MessageBubble variant="user" {...props} />;
}

export { UserMessage };
