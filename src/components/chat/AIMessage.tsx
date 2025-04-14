import { useState } from "react";
import type { Message } from "@ai-sdk/react";
import { MessageBubble, type ButtonOption } from "./MessageBubble";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LevelCompletedToolRenderer } from "./LevelCompletedToolRenderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// Component for rendering a single, inline, expandable tool invocation
function InlineToolInvocation({
  part,
}: {
  part: Extract<
    NonNullable<Message["parts"]>[number],
    { type: "tool-invocation" }
  >;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const isLevelCompletedTool = part.toolInvocation.toolName === "finishLevel";

  return (
    <div className="my-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleExpand}
        className="flex items-center justify-start p-1 h-auto text-left w-full bg-muted/30 hover:bg-muted/60 rounded"
      >
        {isExpanded ? (
          <ChevronUp size={14} className="mr-1" />
        ) : (
          <ChevronDown size={14} className="mr-1" />
        )}
        {isLevelCompletedTool ? "Level Completed" : "Tool Call"}
      </Button>
      {isExpanded && (
        <div className="mt-1 p-2 text-xs border rounded bg-background">
          {part.toolInvocation.args && (
            <>
              <p className="font-medium">Args:</p>
              <pre className="whitespace-pre-wrap break-all bg-muted/20 p-1 rounded text-[0.7rem]">
                {JSON.stringify(part.toolInvocation.args, null, 2)}
              </pre>
            </>
          )}
          {part.toolInvocation.state === "result" &&
            part.toolInvocation.result && (
              <>
                <p className="mt-1 font-medium">Result:</p>
                <pre className="whitespace-pre-wrap break-all bg-muted/20 p-1 rounded text-[0.7rem]">
                  {JSON.stringify(part.toolInvocation.result, null, 2)}
                </pre>
              </>
            )}
        </div>
      )}
    </div>
  );
}

type AIMessageProps = Omit<
  React.ComponentProps<typeof MessageBubble>,
  "variant" | "message"
> & {
  fullMessage: Message;
  onButtonClick?: (value: string, label: string) => void;
};

function AIMessage({ fullMessage, onButtonClick, ...props }: AIMessageProps) {
  console.log("AIMessage", fullMessage.content);
  // Separate text and tool parts
  const textParts =
    fullMessage.parts?.filter((part) => part?.type === "text") || [];
  const toolInvocationParts =
    fullMessage.parts?.filter(
      (
        part,
      ): part is Extract<
        NonNullable<Message["parts"]>[number],
        { type: "tool-invocation" }
      > => part?.type === "tool-invocation",
    ) || [];

  console.log("toolInvocationParts", toolInvocationParts);
  
  // Extract button options from message if available
  // Look for buttons in the message metadata or structured format
  let buttonOptions: ButtonOption[] | undefined;
  try {
    // Try to parse structured format from the message content
    if (fullMessage.content) {
      // Check if message contains JSON with buttons
      const buttonsMatch = fullMessage.content.match(/\{"buttons"\s*:\s*(\[.*?\])\}/);
      if (buttonsMatch && buttonsMatch[1]) {
        const buttonsJson = JSON.parse(`{"buttons":${buttonsMatch[1]}}`);
        buttonOptions = buttonsJson.buttons.map((btn: any) => ({
          label: btn.label || btn.text || String(btn),
          value: btn.value || btn.label || String(btn),
        }));
      }
    }
    
    // Also check message metadata if it exists
    const metadata = fullMessage as any;
    if (metadata.metadata && 'buttons' in metadata.metadata) {
      const metadataButtons = metadata.metadata.buttons;
      if (Array.isArray(metadataButtons)) {
        buttonOptions = metadataButtons.map((btn: any) => ({
          label: btn.label || btn.text || String(btn),
          value: btn.value || btn.label || String(btn),
        }));
      }
    }
    
    // If no buttons were found, try to detect suggestions in the text
    if (!buttonOptions && fullMessage.content) {
      buttonOptions = detectSuggestionsFromText(fullMessage.content);
    }
  } catch (error) {
    console.error("Error parsing button options:", error);
  }
  
  // Function to detect suggestions in text and convert them to button options
  function detectSuggestionsFromText(text: string): ButtonOption[] | undefined {
    const buttons: ButtonOption[] = [];
    
    // Log the text for debugging
    console.log("Analyzing text for suggestions:", text);
    
    // Case 1: Detect simple list of options following a question (line by line format)
    // Example: 
    // What race or species are they?
    // 
    // Human
    // Elf
    // Orc
    const lines = text.split(/\n/).filter(line => line.trim().length > 0); // Split by newlines and remove empty lines
    console.log("Parsed lines:", lines);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      console.log(`Checking line ${i}: "${line}"`);
      
      // Check if line contains a question (ends with ? or contains a question)
      if ((line.endsWith('?') || line.includes('?')) && i < lines.length - 1) {
        console.log(`Found question at line ${i}: "${line}"`);
        // Look for short option lines that follow
        const options: string[] = [];
        let j = i + 1;
        
        // Collect consecutive short lines as options
        while (j < lines.length) {
          const optionLine = lines[j].trim();
          console.log(`Evaluating option candidate at line ${j}: "${optionLine}"`);
          
          // Stop collecting if we find something that looks like a new question or a very long line
          if (optionLine.includes('?') || optionLine.length > 50) {
            console.log(`Stopping at line ${j}: looks like a new question or too long`);
            break;
          }
          
          // Skip likely non-options (based on common patterns)
          if (optionLine.length < 2 || /^(I|You|We|They|The|This|That|It|And|But|Or|If|When|While)/i.test(optionLine)) {
            console.log(`Skipping line ${j}: likely not an option`);
            j++;
            continue;
          }
          
          console.log(`Adding option: "${optionLine}"`);
          options.push(optionLine);
          j++;
        }
        
        // If we found options, add them as buttons
        if (options.length >= 1) { // Only require 1 option for more sensitivity
          console.log(`Found ${options.length} options for question "${line}":`, options);
          options.forEach(option => {
            buttons.push({
              label: option,
              value: option.toLowerCase()
            });
          });
          break; // Found our options, no need to continue
        }
      }
    }
    
    if (buttons.length > 0) {
      console.log("Returning buttons from line-by-line detection:", buttons);
      return buttons;
    }
    
    // If no buttons were found using line-by-line, try a simpler approach:
    // Look for short lines after any line containing a question mark
    if (buttons.length === 0) {
      console.log("Trying simpler approach");
      let foundQuestion = false;
      const simpleOptions: string[] = [];
      
      for (const line of lines) {
        const trimmedLine = line.trim();
        
        if (trimmedLine.includes('?')) {
          foundQuestion = true;
          continue;
        }
        
        if (foundQuestion && trimmedLine.length > 0 && trimmedLine.length < 30 && !trimmedLine.includes('.')) {
          console.log(`Found potential option with simpler approach: "${trimmedLine}"`);
          simpleOptions.push(trimmedLine);
        }
      }
      
      if (simpleOptions.length >= 2) {
        console.log(`Using simpler approach, found ${simpleOptions.length} options:`, simpleOptions);
        simpleOptions.forEach(option => {
          buttons.push({
            label: option,
            value: option.toLowerCase()
          });
        });
        return buttons;
      }
    }
    
    // Detect agent-specific format: "Question?": ["Option 1"; "Option 2"; "Option 3"].
    // This handles the agent's format with both semicolons and commas as separators
    const agentOptionPattern = /"([^"]+)":\s*\[\s*"([^"]+)"(?:\s*;\s*|\s*,\s*)"([^"]+)"(?:\s*;\s*|\s*,\s*)?(?:"([^"]+)")?(?:\s*;\s*|\s*,\s*)?(?:"([^"]+)")?\s*\]/g;
    
    let match;
    while ((match = agentOptionPattern.exec(text)) !== null) {
      // match[1] is the question, match[2]+ are the options
      for (let i = 2; i < match.length; i++) {
        if (match[i]) {
          const option = match[i].trim();
          if (option) {
            buttons.push({
              label: option,
              value: option.toLowerCase()
            });
          }
        }
      }
    }
    
    if (buttons.length > 0) {
      console.log("Returning buttons from agent format detection:", buttons);
      return buttons;
    }
    
    // Case 3: Detect question with options separated by question marks
    // Example: "Carrying any weapons or tools? Axe? Laser gun? Shovel?"
    const questionWithOptions = text.match(/(\w[^?]+\?)\s+([^?]+\?)(?:\s+([^?]+\?))?(?:\s+([^?]+\?))?(?:\s+([^?]+\?))?/);
    if (questionWithOptions) {
      // Extract the options, starting from capture group 2
      for (let i = 2; i < questionWithOptions.length; i++) {
        if (questionWithOptions[i]) {
          const option = questionWithOptions[i].trim();
          if (option) {
            buttons.push({
              label: option, // Keep the question mark in the label for display
              value: option.replace(/\?$/, '').trim().toLowerCase() // Remove question mark for the value
            });
          }
        }
      }
      if (buttons.length > 0) {
        console.log("Returning buttons from question marks detection:", buttons);
        return buttons;
      }
    }
    
    // Case 4: Detect list of options separated by commas or 'and'
    // Example: "Green, yellow, orange, and red."
    const commaList = text.match(/([^,.?!]+(?:,\s*|\s+and\s+))+([^,.?!]+)/);
    if (commaList && commaList[0]) {
      const optionsText = commaList[0];
      const options = optionsText
        .split(/,\s*|\s+and\s+/)
        .map(opt => opt.trim())
        .filter(opt => opt.length > 0 && !/^(I|you|we|they|he|she|it|got|please|thank)/i.test(opt));
      
      if (options.length > 1) {
        options.forEach(option => {
          if (option) {
            const cleanOption = option.replace(/[,.?!]$/, '').trim(); // Remove trailing punctuation
            buttons.push({
              label: cleanOption, // Clean label for display
              value: cleanOption.toLowerCase() // Lowercase for value
            });
          }
        });
        if (buttons.length > 0) {
          console.log("Returning buttons from comma list detection:", buttons);
          return buttons;
        }
      }
    }
    
    // Case 5: Detect options in format: "Option1 or Option2 or Option3?"
    const orOptions = text.match(/(\w[^?.,!]+(?:\s+or\s+))+(\w[^?.,!]+)(\?)?/);
    if (orOptions && orOptions[0]) {
      const optionsText = orOptions[0];
      const options = optionsText
        .replace(/\?$/, '')
        .split(/\s+or\s+/)
        .map(opt => opt.trim())
        .filter(opt => opt.length > 0);
      
      if (options.length > 1) {
        options.forEach(option => {
          if (option) {
            const cleanOption = option.replace(/[,.?!]$/, '').trim(); // Remove trailing punctuation
            buttons.push({
              label: cleanOption, // Clean label for display
              value: cleanOption.toLowerCase() // Lowercase for value
            });
          }
        });
        if (buttons.length > 0) {
          console.log("Returning buttons from 'or' options detection:", buttons);
          return buttons;
        }
      }
    }
    
    console.log("No buttons detected in text.");
    return buttons.length > 0 ? buttons : undefined;
  }
  
  // Render message content with text first, then tool calls
  const messageContent = (
    <div>
      {/* Render Text Parts with Markdown */}
      {textParts.map((part, index) => {
        if (!part || part.type !== "text") return null;
        
        // Clean the text from any button JSON format
        let cleanText = part.text;
        if (buttonOptions) {
          cleanText = cleanText.replace(/\{"buttons"\s*:\s*\[.*?\]\}/, '').trim();
        }
        
        return (
          <div
            key={`${fullMessage.id || "msg"}-text-${index}`}
            className="whitespace-pre-wrap break-words text-card-foreground"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {cleanText}
            </ReactMarkdown>
          </div>
        );
      })}

      {/* Render Tool Invocation Parts */}
      {toolInvocationParts.map((part, index) => {
        if (part.toolInvocation.toolName === "finishLevelTool") {
          // Render LevelCompletedToolRenderer for finishLevel tool calls
          return (
            <LevelCompletedToolRenderer
              key={`${fullMessage.id}-tool-${index}`}
              toolInvocation={part}
            />
          );
        }
        // Render InlineToolInvocation for other tool calls
        return (
          <InlineToolInvocation
            key={`${fullMessage.id}-tool-${index}`}
            part={part}
          />
        );
      })}

      {/* Fallback if parts is empty/missing, but content exists */}
      {!fullMessage.parts?.length && fullMessage.content && (
        <div className="whitespace-pre-wrap break-words text-card-foreground">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {fullMessage.content.replace(/\{"buttons"\s*:\s*\[.*?\]\}/, '').trim()}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );

  return (
    <MessageBubble 
      variant="ai" 
      message={messageContent} 
      buttonOptions={buttonOptions}
      onButtonClick={onButtonClick}
      {...props} 
    />
  );
}

export { AIMessage };
