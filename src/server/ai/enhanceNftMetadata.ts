import { CharacterSchema } from "../db/chat/chat.db";

/**
 * Enhances NFT metadata with character attributes from the character sheet
 */
export function enhanceNftMetadataWithCharacter(
  baseMetadata: any, 
  character: CharacterSchema
): any {
  const { char, attrs, status } = {
    char: character.character,
    attrs: character.attributes,
    status: character.status
  };

  // Make a copy of the base metadata to avoid mutating the original
  const enhancedMetadata = { ...baseMetadata };
  
  // Ensure there's an attributes array
  if (!enhancedMetadata.attributes) {
    enhancedMetadata.attributes = [];
  }

  // Add character attributes as NFT traits
  enhancedMetadata.attributes.push(
    { trait_type: "Class", value: char.class },
    { trait_type: "Race", value: char.race },
    { trait_type: "Level", value: char.level, display_type: "number" },
    { trait_type: "Strength", value: attrs.strength, display_type: "number" },
    { trait_type: "Dexterity", value: attrs.dexterity, display_type: "number" },
    { trait_type: "Constitution", value: attrs.constitution, display_type: "number" },
    { trait_type: "Intelligence", value: attrs.intelligence, display_type: "number" },
    { trait_type: "Wisdom", value: attrs.wisdom, display_type: "number" },
    { trait_type: "Charisma", value: attrs.charisma, display_type: "number" },
    { trait_type: "HP", value: status.max_hp || 0, display_type: "number" },
    { trait_type: "Armor Class", value: status.armor_class || 10, display_type: "number" }
  );

  // Add equipped weapons/armor as traits
  const equipment = character.inventory?.equipment || [];
  const equippedItems = equipment
    .filter(item => item.equipped)
    .map(item => item.name);
    
  if (equippedItems.length > 0) {
    enhancedMetadata.attributes.push({ 
      trait_type: "Equipment", 
      value: equippedItems.join(", ") 
    });
  }

  // Add proficiencies as a trait
  const proficiencies = [
    ...character.proficiencies.weapons, 
    ...character.proficiencies.armor, 
    ...character.proficiencies.tools
  ];
  
  if (proficiencies.length > 0) {
    enhancedMetadata.attributes.push({
      trait_type: "Proficiencies",
      value: proficiencies.slice(0, 3).join(", ") + (proficiencies.length > 3 ? "..." : "")
    });
  }

  // Add languages as a trait
  if (character.proficiencies.languages.length > 0) {
    enhancedMetadata.attributes.push({
      trait_type: "Languages",
      value: character.proficiencies.languages.join(", ")
    });
  }

  // Update description to include character background
  if (char.background && enhancedMetadata.description) {
    enhancedMetadata.description += `\n\nBackground: ${char.background}`;
  }

  return enhancedMetadata;
} 