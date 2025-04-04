import type * as React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"; // Use separator for visual break

interface SystemMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: React.ReactNode;
}

function SystemMessage({ className, message, ...props }: SystemMessageProps) {
  return (
    <div
      className={cn("my-4 flex flex-col items-center gap-2", className)}
      {...props}
    >
      {/* Optional separator for visual distinction */}
      <Separator className="w-1/2" />
      <p className="text-center text-xs text-muted-foreground px-4">
        {message}
      </p>
      <Separator className="w-1/2" />
    </div>
  );
}

export { SystemMessage };
