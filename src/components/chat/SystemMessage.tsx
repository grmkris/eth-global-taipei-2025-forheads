import type * as React from "react";
import { cn } from "@/lib/utils";

interface SystemMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
}

function SystemMessage({ className, message, ...props }: SystemMessageProps) {
  return (
    <div
      className={cn("my-4 flex flex-col items-center gap-2", className)}
      {...props}
    >
      <p className="text-center text-xs text-muted-foreground px-4">
        {message}
      </p>
    </div>
  );
}

export { SystemMessage };
