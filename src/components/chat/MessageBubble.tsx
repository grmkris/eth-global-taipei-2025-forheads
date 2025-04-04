import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const messageVariants = cva("flex items-start gap-3", {
  variants: {
    variant: {
      user: "justify-end",
      ai: "justify-start",
    },
  },
  defaultVariants: {
    variant: "ai",
  },
});

const bubbleVariants = cva(
  "relative rounded-lg px-4 py-2 max-w-[75%] text-sm shadow-sm border", // Added border here as per theme
  {
    variants: {
      variant: {
        user: "bg-primary text-primary-foreground border-primary-border", // Use primary colors
        ai: "bg-card text-card-foreground border-border", // Use card colors
      },
    },
    defaultVariants: {
      variant: "ai",
    },
  },
);

interface MessageBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {
  avatarSrc?: string;
  avatarFallback?: string;
  message: React.ReactNode;
  timestamp?: string; // Optional timestamp
}

function MessageBubble({
  className,
  variant,
  avatarSrc,
  avatarFallback,
  message,
  timestamp,
  ...props
}: MessageBubbleProps) {
  const bubbleClassName = cn(bubbleVariants({ variant }));
  const avatar = (
    <Avatar className="size-8 border-2 border-border">
      {" "}
      {/* Consistent avatar size and border */}
      <AvatarImage src={avatarSrc} alt="Sender avatar" />
      <AvatarFallback>
        {avatarFallback?.slice(0, 2).toUpperCase() || "???"}
      </AvatarFallback>
    </Avatar>
  );

  return (
    <div className={cn(messageVariants({ variant }), className)} {...props}>
      {variant === "ai" && avatar}
      <div className="flex flex-col gap-1">
        <div className={bubbleClassName}>{message}</div>
        {timestamp && (
          <p
            className={cn(
              "text-xs text-muted-foreground",
              variant === "user" ? "text-right" : "text-left",
            )}
          >
            {timestamp}
          </p>
        )}
      </div>
      {variant === "user" && avatar}
    </div>
  );
}

export { MessageBubble };
