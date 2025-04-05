import type { Message } from "@ai-sdk/react";
import { useProgression } from "@/lib/chatHooks";
import { useAccount } from "wagmi";
import Image from "next/image";
import { ToolName2LevelMap, type Level1SheetSchema } from "@/server/db/chat/chat.db";
import { AgentLevel } from "@/server/ai/gameAgent";

export const LevelCompletedToolRenderer = (props: {
  toolInvocation: Extract<NonNullable<Message["parts"]>[number], { type: "tool-invocation" }>;
}) => {
  const account = useAccount();

  console.log("qweqweqwe", props.toolInvocation);
  const gameLevel = AgentLevel.parse(props.toolInvocation.toolInvocation.args.level);
  const level = ToolName2LevelMap[gameLevel];
  console.log(props.toolInvocation);
  const { data: progression } = useProgression({
    address: account.address,
    level: level,
  });

  switch (progression?.[0]?.data.type) {
    case "level1-picture":
      return <Level1PictureRenderer imagebase64={progression?.[0]?.data.image} />;
    case "level1-sheet":
      return <Level1SheetRenderer sheet={progression?.[0]?.data} />;
  }
};

/**
 * base64 image renderer
 * @param props 
 * @returns 
 */
const Level1PictureRenderer = (props: {
  imagebase64: string;
}) => {
  const imageSrc = `data:image/png;base64,${props.imagebase64}`;
  return <Image src={imageSrc} alt="Level 1 Picture" width={100} height={100} />;
};

/**
 * level 1 sheet renderer
 * @param props 
 * @returns 
 */
const Level1SheetRenderer = (props: {
  sheet: Level1SheetSchema;
}) => {
  const { character, attributes } = props.sheet.characterSheet;
  const attributeEntries = Object.entries(attributes);

  return (
    <div className="mt-2 p-4 border rounded-md bg-muted/50 shadow">
      <h3 className="text-lg font-semibold mb-2 border-b pb-1">
        {character.name} - {character.race} {character.class} (Level {character.level})
      </h3>
      <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-sm">
        {attributeEntries.map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="font-medium capitalize">{key.substring(0, 3)}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      {/* Add more sections for status, proficiencies, etc. as needed */}
    </div>
  );
};  
