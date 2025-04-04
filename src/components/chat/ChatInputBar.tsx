import * as React from "react";
import { SendHorizonalIcon } from "lucide-react"; // Using Send Horizontal icon

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatInputBarProps extends React.HTMLAttributes<HTMLFormElement> {
  inputProps?: React.ComponentProps<typeof Textarea>;
  buttonProps?: React.ComponentProps<typeof Button>;
  onSendMessage: (message: string) => void; // Callback when message is sent
}

function ChatInputBar({
  className,
  inputProps,
  buttonProps,
  onSendMessage,
  ...props
}: ChatInputBarProps) {
  const [message, setMessage] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = (
    event?:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event?.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage(""); // Clear input after sending
      textareaRef.current?.focus(); // Keep focus on textarea
    }
  };

  // Allow sending with Enter, but Shift+Enter for new line
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <form
      onSubmit={handleSend}
      className={cn(
        "flex w-full items-end gap-2 border-t bg-background p-4", // Use background, add padding and border
        className,
      )}
      {...props}
    >
      <Textarea
        ref={textareaRef}
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        rows={1} // Start with 1 row, auto-expands due to field-sizing-content
        className="min-h-10 max-h-48 flex-1 resize-none" // Allow expansion up to a certain height
        {...inputProps}
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim()} // Disable if no message
              aria-label="Send message"
              {...buttonProps}
            >
              <SendHorizonalIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Send message</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </form>
  );
}

export { ChatInputBar };
