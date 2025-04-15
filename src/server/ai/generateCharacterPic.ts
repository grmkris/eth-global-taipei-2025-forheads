import { CharacterSchema } from "../db/chat/chat.db";
import type { AiClient } from "./aiClient";

export const generateCharacterPic = async (props: {
  aiClient: AiClient;
  prompt: string;
}) => {
  const { aiClient, prompt } = props;

  const response = await aiClient.generateText({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-exp",
      provider: "google",
    }),
    providerOptions: {
      google: { responseModalities: ["IMAGE", "TEXT"] },
    },
    temperature: 1,
    prompt: prompt,
  });
  console.log({
    msg: "qqqqqqqqq",
    response: response.files.length,
  });
  for (const file of response.files) {
    console.log({
      file,
    });
    if (file.mimeType.startsWith("image/")) {
      // The file object provides multiple data formats:
      // Access images as base64 string, Uint8Array binary data, or check type
      // - file.base64: string (data URL format)
      // - file.uint8Array: Uint8Array (binary data)
      // - file.mimeType: string (e.g. "image/png")
      return file.base64;
    }
  }
  throw new Error("No image found in response");
};

export const generateCharacterSheet = async (props: {
  aiClient: AiClient;
  prompt: string;
}) => {
  const { aiClient, prompt } = props;

  const response = await aiClient.generateObject({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-exp",
      provider: "google",
    }),
    system: `You are a character sheet builder for D&D 5e.
    
    Based on the player's description, create a complete character sheet with:
    - Basic info (name, race, class, level, etc.)
    - Appropriate attribute scores (STR, DEX, CON, INT, WIS, CHA)
    - Hit points and armor class
    - Skills and proficiencies
    - Starting equipment
    - Any spells if applicable
    
    Make choices that are balanced and appropriate for a new character.
    Calculate modifiers and derived stats correctly.
    Follow D&D 5e rules for character creation.
    
    For attributes, use the standard array (15, 14, 13, 12, 10, 8) assigned
    appropriately for the character class.`,
    prompt: prompt,
    schema: CharacterSchema,
  });

  // Add basic derived values if they're missing
  const character = response.object;
  
  // Calculate proficiency bonus if missing
  if (!character.character.proficiencyBonus) {
    character.character.proficiencyBonus = Math.floor((character.character.level - 1) / 4) + 2;
  }
  
  // Calculate initiative if missing
  if (!character.status.initiative) {
    character.status.initiative = Math.floor((character.attributes.dexterity - 10) / 2);
  }
  
  // Fill in any other missing values with sensible defaults
  character.character.speed = character.character.speed || 30;
  character.character.inspiration = character.character.inspiration || false;
  
  // Make sure HP is set
  if (!character.status.max_hp) {
    // Default calculation based on class hit dice and CON modifier
    const conMod = Math.floor((character.attributes.constitution - 10) / 2);
    const hitDice = getHitDiceForClass(character.character.class);
    character.status.max_hp = hitDice + conMod; // Level 1 is always max HP
    character.status.current_hp = character.status.max_hp;
  }
  
  return character;
};

// Helper function to determine hit dice by class
function getHitDiceForClass(className: string): number {
  const lowerClass = className.toLowerCase();
  if (lowerClass.includes("barbarian")) return 12;
  if (lowerClass.includes("fighter") || lowerClass.includes("paladin") || 
      lowerClass.includes("ranger")) return 10;
  if (lowerClass.includes("bard") || lowerClass.includes("cleric") || 
      lowerClass.includes("druid") || lowerClass.includes("monk") || 
      lowerClass.includes("rogue") || lowerClass.includes("warlock")) return 8;
  if (lowerClass.includes("sorcerer") || lowerClass.includes("wizard")) return 6;
  return 8; // Default
}
