import type * as React from "react";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type Direction = "ltr" | "rtl";
type ChatContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  dir?: Direction;
};

function ChatContainer({ className, children, ...props }: ChatContainerProps) {
  return (
    <ScrollArea className={cn("h-full w-full flex-1", className)} {...props}>
      <div className="p-4">{children}</div>
    </ScrollArea>
  );
}

export { ChatContainer };
