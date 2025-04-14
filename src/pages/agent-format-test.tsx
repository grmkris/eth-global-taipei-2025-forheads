import React, { useState } from 'react';
import { MessageBubble, type ButtonOption } from '@/components/chat/MessageBubble';

export default function AgentFormatTestPage() {
  const [formatVariation, setFormatVariation] = useState<number>(0);
  
  // Different variations of the same content with different syntax
  const formatVariations = [
    // Format 1: Standard format with semicolons
    'Let\'s customize your character!\n\n"What\'s your character\'s name?": ["John"; "Sarah"; "Zorg"].\n\n"What race or species are they?": ["Human"; "Elf"; "Dwarf"; "Orc"].',
    
    // Format 2: With commas instead of semicolons
    'Let\'s customize your character!\n\n"What\'s your character\'s name?": ["John", "Sarah", "Zorg"].\n\n"What race or species are they?": ["Human", "Elf", "Dwarf", "Orc"].',
    
    // Format 3: Without quotes around the question
    'Let\'s customize your character!\n\nWhat\'s your character\'s name?: ["John"; "Sarah"; "Zorg"].\n\nWhat race or species are they?: ["Human"; "Elf"; "Dwarf"; "Orc"].',
    
    // Format 4: Mixed format with both semicolons and commas
    'Let\'s customize your character!\n\n"What\'s your character\'s name?": ["John"; "Sarah", "Zorg"].\n\n"What race or species are they?": ["Human", "Elf"; "Dwarf", "Orc"].',
  ];

  const [messages, setMessages] = useState<Array<{
    id: string;
    content: string;
    isUser: boolean;
    timestamp?: string;
    buttonOptions?: ButtonOption[];
  }>>([
    {
      id: "ai-1",
      content: formatVariations[formatVariation],
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const handleButtonClick = (value: string, label: string) => {
    // Add user message with the button's text
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        content: label,
        isUser: true,
        timestamp: new Date().toLocaleTimeString(),
      }
    ]);

    // Determine next AI response based on the selected option
    let nextContent = '';
    
    if (value === 'john' || value === 'sarah' || value === 'zorg') {
      nextContent = `Great! Your character's name is ${label}.\n\n"What is your character's gender?": ["Male"; "Female"; "Non-binary"].\n\n"How would you describe their build and height?": ["Tall and muscular"; "Short and stocky"; "Average"; "Slender and graceful"].`;
    } else if (value === 'human' || value === 'elf' || value === 'dwarf' || value === 'orc') {
      nextContent = `A ${label}! Excellent choice.\n\n"What special abilities should they have?": ["Magic"; "Stealth"; "Strength"; "Intelligence"].\n\n"What's their profession?": ["Warrior"; "Mage"; "Thief"; "Healer"].`;
    } else {
      nextContent = `You selected: ${label}\n\n"What would you like to do next?": ["Continue character creation"; "Start adventure"; "Go back"].`;
    }

    // Add AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          content: nextContent,
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
        }
      ]);
    }, 800);
  };

  // Function to switch between format variations
  const switchFormat = (index: number) => {
    setFormatVariation(index);
    setMessages([
      {
        id: `ai-${Date.now()}`,
        content: formatVariations[index],
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      }
    ]);
  };

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Agent Format Test</h1>
        <p className="text-gray-700 mb-4">
          This demo tests the detection of agent-formatted suggestions with their specific syntax.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-800 text-sm mb-4">
          <strong>Format variations being tested:</strong>
          <div className="mt-2 space-y-2">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => switchFormat(0)} 
                className={`px-2 py-1 text-xs rounded ${formatVariation === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                With semicolons
              </button>
              <button 
                onClick={() => switchFormat(1)}
                className={`px-2 py-1 text-xs rounded ${formatVariation === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                With commas
              </button>
              <button 
                onClick={() => switchFormat(2)}
                className={`px-2 py-1 text-xs rounded ${formatVariation === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Without quotes
              </button>
              <button 
                onClick={() => switchFormat(3)}
                className={`px-2 py-1 text-xs rounded ${formatVariation === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Mixed format
              </button>
            </div>
            <pre className="mt-1 bg-white/50 p-2 rounded text-xs overflow-x-auto">
              {formatVariations[formatVariation]}
            </pre>
          </div>
        </div>
      </div>

      <div className="border rounded-lg shadow-md overflow-hidden bg-gray-50">
        <div className="p-4 bg-primary text-primary-foreground font-medium">
          Character Creator
        </div>
        
        <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              variant={message.isUser ? "user" : "ai"}
              message={message.content}
              timestamp={message.timestamp}
              avatarSrc={message.isUser ? undefined : '/bot-avatar.png'}
              avatarFallback={message.isUser ? "You" : "AI"}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 