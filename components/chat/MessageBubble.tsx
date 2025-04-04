  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
    <div
      className={cn(
        "group relative mb-4 flex items-start md:-ml-12",
        isUser ? "justify-end" : ""
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-md border-2 border-border bg-primary text-primary-foreground",
          isUser ? "ml-2" : "mr-2"
        )}
      >
        <Avatar>
          <AvatarImage src={avatarSrc} alt={isUser ? "User" : "AI"} />
          <AvatarFallback>{isUser ? "U" : "A"}</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-1 space-y-2 overflow-hidden px-4 py-2",
          isUser ? "order-1 items-end" : "order-2 items-start"
        )}
      >
        <div
          className={cn(
            "flex max-w-[80%] flex-col space-y-1 rounded-xl border p-3 text-sm shadow-sm",
            isUser
              ? "ml-auto bg-primary text-primary-foreground border-primary-border"
              : "bg-muted text-muted-foreground border-border"
          )}
        >
          {message.tool_calls && message.tool_calls.length > 0 && (
            <ToolCall
// ... existing code ...

  return (
 