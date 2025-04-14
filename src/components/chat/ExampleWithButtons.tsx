import React, { useState } from "react";
import { MessageBubble, type ButtonOption } from "./MessageBubble";

interface ExampleWithButtonsProps {
  initialMessage: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

export function ExampleWithButtons({
  initialMessage,
  avatarSrc,
  avatarFallback,
}: ExampleWithButtonsProps) {
  const [messages, setMessages] = useState<Array<{
    id: string;
    content: string;
    isUser: boolean;
    timestamp?: string;
    buttonOptions?: ButtonOption[];
  }>>([
    {
      id: "ai-1",
      content: initialMessage,
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
      buttonOptions: [
        {
          label: "Option 1",
          value: "option1",
        },
        {
          label: "Option 2",
          value: "option2",
        },
        {
          label: "Option 3",
          value: "option3",
        },
      ],
    },
  ]);

  const handleButtonClick = (value: string, label: string) => {
    // Add user message with the button's text
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        content: label.replace(/\?$/, '').trim(), // Remove trailing question mark if present
        isUser: true,
        timestamp: new Date().toLocaleTimeString(),
      }
    ]);

    // Determine next AI response based on the selected value
    let nextAiContent = "";
    let nextButtonOptions: ButtonOption[] | undefined;
    
    if (value === 'green' || value === 'yellow' || value === 'orange' || value === 'red') {
      nextAiContent = "Green, yellow, orange, and red. Got it.\n\nCarrying any weapons or tools? Axe? Laser gun? Shovel?";
      // No explicit button options needed - they will be auto-detected from the content
    } else if (value === 'axe' || value === 'laser gun' || value === 'shovel') {
      nextAiContent = `Got it, you have a ${value}. What would you like to do with it? Use it? Store it? Discard it?`;
      // No explicit button options needed - they will be auto-detected from the content
    } else {
      // Default response for other options
      nextAiContent = `Thanks for selecting ${label}! Would you like to continue with Option A or Option B?`;
      // No explicit button options needed - they will be auto-detected from the content
    }

    // Add AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          content: nextAiContent,
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
          buttonOptions: nextButtonOptions,
        }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          variant={message.isUser ? "user" : "ai"}
          message={message.content}
          timestamp={message.timestamp}
          avatarSrc={!message.isUser ? avatarSrc : undefined}
          avatarFallback={!message.isUser ? avatarFallback : "You"}
          buttonOptions={message.buttonOptions}
          onButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
} 