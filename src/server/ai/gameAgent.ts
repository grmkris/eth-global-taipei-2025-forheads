import {
  type DataStreamWriter,
  type Message,
  appendClientMessage,
  appendResponseMessages,
} from "ai";
import { typeIdGenerator, type UserId } from "@/server/db/typeid";
import type { AiClient } from "./aiClient";
import type { ChatHistoryService } from "./chatHistoryService";
import { picPromptGenerator } from "./prompts/01-Pic";
import { levelProgressionTable } from "../db/chat/chat.db";
import type { db as DbType } from "../db/db";
import { sheetMakerPromptGenerator } from "./prompts/02-SheetMaker";
import { eq } from "drizzle-orm";
import { level1PromptGenerator } from "./prompts/03-Level1";
import { level2PromptGenerator } from "./prompts/04-Level2";
import { createAgentTools } from "./agentTools";

const systemPrompt = async (props: { db: DbType; userId: UserId }) => {
  const { db, userId } = props;
  const levelProgression = await db.query.levelProgressionTable.findMany({
    where: eq(levelProgressionTable.userId, userId),
  });

  // if there is no level progression, return the pic prompt
  if (levelProgression.length === 0) {
    return picPromptGenerator();
  }

  const latestLevel = levelProgression[levelProgression.length - 1];

  // Generate appropriate prompt based on level
  let basePrompt;
  switch (latestLevel.data.level) {
    case "pic": {
      return sheetMakerPromptGenerator();
    }
    case "sheet": {
      basePrompt = level1PromptGenerator({
        characterSheet: latestLevel.data.characterSheet,
      });
      break;
    }
    case "level": {
      if (latestLevel.data.levelIndex === 0) {
        basePrompt = level2PromptGenerator({
          characterSheet: latestLevel.data.characterSheet,
        });
      } else {
        basePrompt = level2PromptGenerator({
          characterSheet: latestLevel.data.characterSheet,
        });
      }
      break;
    }
  }

  // Add character sheet guidance to the prompt
  if (latestLevel.data.level === "sheet" || latestLevel.data.level === "level") {
    const characterSheet = latestLevel.data.characterSheet;
    
    // Calculate key values for the DM
    const abilityModifiers = {
      str: Math.floor((characterSheet.attributes.strength - 10) / 2),
      dex: Math.floor((characterSheet.attributes.dexterity - 10) / 2),
      con: Math.floor((characterSheet.attributes.constitution - 10) / 2),
      int: Math.floor((characterSheet.attributes.intelligence - 10) / 2),
      wis: Math.floor((characterSheet.attributes.wisdom - 10) / 2),
      cha: Math.floor((characterSheet.attributes.charisma - 10) / 2),
    };
    
    const profBonus = characterSheet.character.proficiencyBonus || 
                     Math.floor((characterSheet.character.level - 1) / 4) + 2;
    
    // Add DM guidance to the base prompt
    const dmGuidance = `
# CHARACTER SHEET REFERENCE
You are the DM for a player with the following character:

## ${characterSheet.character.name}
Level ${characterSheet.character.level} ${characterSheet.character.race} ${characterSheet.character.class}
AC: ${characterSheet.status.armor_class || 10} | HP: ${characterSheet.status.current_hp || 0}/${characterSheet.status.max_hp || 0}
STR: ${characterSheet.attributes.strength} (${abilityModifiers.str >= 0 ? '+' : ''}${abilityModifiers.str})
DEX: ${characterSheet.attributes.dexterity} (${abilityModifiers.dex >= 0 ? '+' : ''}${abilityModifiers.dex})
CON: ${characterSheet.attributes.constitution} (${abilityModifiers.con >= 0 ? '+' : ''}${abilityModifiers.con})
INT: ${characterSheet.attributes.intelligence} (${abilityModifiers.int >= 0 ? '+' : ''}${abilityModifiers.int})
WIS: ${characterSheet.attributes.wisdom} (${abilityModifiers.wis >= 0 ? '+' : ''}${abilityModifiers.wis})
CHA: ${characterSheet.attributes.charisma} (${abilityModifiers.cha >= 0 ? '+' : ''}${abilityModifiers.cha})

Proficiency Bonus: +${profBonus}
Skill Proficiencies: ${characterSheet.proficiencies.skills.join(", ")}
Weapon Proficiencies: ${characterSheet.proficiencies.weapons.join(", ")}
Languages: ${characterSheet.proficiencies.languages.join(", ")}

# DM GUIDANCE
When the player attempts an action:

1. For SKILL CHECKS:
   - If using a skill they're proficient in, roll d20 + ability modifier + proficiency bonus (+${profBonus})
   - If using a skill they're not proficient in, roll d20 + ability modifier only
   - Compare against appropriate DC (10: easy, 15: moderate, 20: hard)

2. For ATTACK ROLLS:
   - If using a weapon they're proficient with, roll d20 + ability modifier + proficiency bonus (+${profBonus})
   - If using a weapon they're not proficient with, roll d20 + ability modifier only
   - Compare against target's AC

3. For SAVING THROWS:
   - If it's a saving throw they're proficient in, roll d20 + ability modifier + proficiency bonus (+${profBonus})
   - If it's a saving throw they're not proficient in, roll d20 + ability modifier only
   - Compare against appropriate DC

4. For SPELLCASTING (if applicable):
   - Spell save DC = 8 + proficiency bonus (+${profBonus}) + spellcasting ability modifier
   - Spell attack bonus = proficiency bonus (+${profBonus}) + spellcasting ability modifier

Remember to narrate the results of rolls and checks in an engaging way.
Track HP changes when the character takes damage or heals.
`;

    return `${basePrompt}\n\n${dmGuidance}`;
  }

  return basePrompt;
};

export const createGameAgent = (props: {
  deps: {
    aiClient: AiClient;
    db: DbType;
  };
  userId: UserId;
}) => {
  const { aiClient, db } = props.deps;
  const { userId } = props;

  const tools = createAgentTools({
    deps: {
      aiClient,
      db,
    },
    userId,
  });

  return {
    queryStream: async (params: {
      message: Message;
      chatHistoryService: ChatHistoryService;
      onError?: (error: { error: unknown }) => void;
      dataStreamWriter: DataStreamWriter;
    }) => {
      const { message, chatHistoryService, onError } = params;

      const existingConversation =
        await chatHistoryService.getConversationMessages();
      await chatHistoryService.addUserMessage(message);

      const messagesForAi = appendClientMessage({
        messages: existingConversation,
        message: message,
      });

      console.log({
        messagesForAi: messagesForAi,
      });

      const result = aiClient.streamText({
        tools,
        toolCallStreaming: true,
        onStepFinish: async (result) => {
          const newMessagesAndOld = appendResponseMessages({
            messages: messagesForAi,
            responseMessages: result.response.messages,
          });

          const justNewMessages = newMessagesAndOld.filter(
            (m) => !messagesForAi.map((orig) => orig.id).includes(m.id),
          );

          console.debug({
            msg: "Agent step finished, new messages:",
            justNewMessages,
          });

          await chatHistoryService.addAgentMessages(justNewMessages);
        },
        onError: (error) => {
          console.error({
            msg: "Agent error",
            error,
          });
          onError?.(error);
        },
        maxSteps: 5,
        messages: messagesForAi,
        system: await systemPrompt({ db, userId }),
        model: aiClient.getModel({
          modelId: "gemini-2.5-pro-exp-03-25",
          provider: "google",
        }),
        experimental_generateMessageId: () => typeIdGenerator("message"),
      });

      return result;
    },
  };
};

export type GameAgent = ReturnType<typeof createGameAgent>;
