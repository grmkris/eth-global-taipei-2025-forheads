import type { AgentLevel } from "../db/chat/chat.zod";

import { tool, type CoreMessage } from "ai";

import { z } from "zod";
import {
  CharacterSchema,
  levelProgressionTable,
  usersTable,
  type Level1PictureSchema,
  type LevelSchema,
  type Level1SheetSchema,
  NftMintStatus,
  itemsTable,
  type ItemSchema,
} from "../db/chat/chat.db";
import {
  generateCharacterPic,
  generateCharacterSheet,
} from "./generateCharacterPic";
import type { UserId } from "../db/typeid";
import type { AiClient } from "./aiClient";
import type { db } from "../db/db";
import { and, desc, eq } from "drizzle-orm";
import { isAddress } from "viem";
import { mintProfileNFT } from "../web3/deployProfileNFTCollection";
import { deployProfileNFTCollection } from "../web3/deployProfileNFTCollection";
import {
  deployItemNFTCollection,
  mintItemNft,
} from "../web3/deployProfileNFTCollection";
import { serverEnv } from "../serverEnv";
import { typeIdGenerator } from "../db/typeid";
import { generateItemImage } from "./generateItemImage";

export const createAgentTools = (props: {
  deps: {
    aiClient: AiClient;
    db: db;
  };
  userId: UserId;
}) => {
  const { aiClient, db } = props.deps;
  const { userId } = props;

  const finishLevelTool = tool({
    description: "Call this tool to finish the current level",
    parameters: z.object({
      data: z.string(),
    }),
    execute: async (args, { messages }) => {
      const latestLevel = await db.query.levelProgressionTable.findFirst({
        where: eq(levelProgressionTable.userId, userId),
        orderBy: desc(levelProgressionTable.createdAt),
      });
      try {
        // we are here checking for the level previous to the current level, because current level has to be inserted after the tool is executed
        switch (latestLevel?.data.level) {
          case undefined: {
            console.log(
              `[Agent Tool - pic] User ${userId} finishing pic level.`,
            );
            return await handlePicLevel({
              userId,
              aiClient,
              db,
              prompt: args.data,
            });
          }
          case "pic": {
            console.log(
              `[Agent Tool - sheet] User ${userId} finishing sheet level.`,
            );
            const characterSheet = await generateCharacterSheet({
              aiClient,
              prompt: args.data,
            });
            await db.insert(levelProgressionTable).values({
              level: "sheet",
              levelIndex: 0,
              userId: userId,
              data: {
                level: "sheet",
                prompt: args.data,
                characterSheet: characterSheet,
              } satisfies Level1SheetSchema,
            });
            console.log(
              `[Agent Tool - sheet] Saved level1-sheet progression for user ${userId}.`,
            );
            return {
              level: "sheet",
              levelIndex: 0,
              message: "Sheet generated and user moved to next level",
            };
          }
          case "sheet": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.level !== "sheet") {
              throw new Error("User is not in level 1");
            }
            const result = await completeLevel({
              characterSheet: latestLevel.data.characterSheet,
              level1Messages: messages,
              level: "level",
              levelIndex: 0,
              aiClient,
              userId,
              db,
            });
            console.log({
              msg: "Level 1 generated and user moved to next level",
              result,
            });
            await db.insert(levelProgressionTable).values({
              level: "level",
              levelIndex: 0,
              userId: userId,
              data: result,
            });
            return {
              level: "level",
              levelIndex: 0,
              message: "Level 1 generated and user moved to next level",
              characterSheet: result.characterSheet,
              levelSummary: result.levelSummary,
              items: result.items.map((item) => ({ // we return only the name and description of the items to not kill the context of the AI
                name: item.name,
                description: item.description,
              })),
            };
          }
          case "level": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.level !== "level") {
              throw new Error("User is not in a game level");
            }
            const nextLevelIndex = latestLevel.levelIndex + 1;
            const result = await completeLevel({
              characterSheet: latestLevel.data.characterSheet,
              level1Messages: messages,
              level: "level",
              levelIndex: nextLevelIndex,
              aiClient,
              userId,
              db,
            });
            await db.insert(levelProgressionTable).values({
              level: "level",
              levelIndex: nextLevelIndex,
              userId: userId,
              data: result,
            });
            return {
              level: "level",
              levelIndex: nextLevelIndex,
              message: `Level ${nextLevelIndex} generated and user moved to next level`,
              characterSheet: result.characterSheet,
              levelSummary: result.levelSummary,
              items: result.items.map((item) => ({
                name: item.name,
                description: item.description,
              })),
            };
          }
        }
      } catch (error) {
        console.error({
          msg: "Error in finish level tool",
          error,
        });
        return {
          msg: "Error in finish level tool, ask the user to try again",
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
  });

  return {
    finishLevelTool,
  };
};

export const handlePicLevel = async (props: {
  userId: UserId;
  aiClient: AiClient;
  db: db;
  prompt: string;
}) => {
  const { userId, aiClient, db, prompt } = props;
  console.log(`[Agent Tool - pic] User ${userId} finishing pic level.`);

  try {
    // 1. Generate character pic
    const image = await generateCharacterPic({ aiClient, prompt });

    // 2. Save initial progress
    await db.insert(levelProgressionTable).values({
      level: "pic",
      levelIndex: 0,
      userId,
      data: {
        level: "pic",
        prompt,
        image,
        tokenId: null,
      } satisfies Level1PictureSchema,
    });

    // 3. Get user data
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.id, userId),
    });

    if (!user?.walletAddress || !isAddress(user.walletAddress)) {
      throw new Error("User data incomplete for NFT operations.");
    }

    const userAddress = user.walletAddress as `0x${string}`;
    let contractAddress = (user.nftContractAddress as `0x${string}`) || null;

    // 4. Deploy contract if needed
    if (!contractAddress) {
      const shortAddress = `${userAddress.slice(0, 6)}...${userAddress.slice(
        -4,
      )}`;
      const name = `Forehead ${shortAddress}`;
      const symbol = `FH${shortAddress.replace(/\.|0x/g, "")}`;

      contractAddress = await deployProfileNFTCollection({ name, symbol });

      await db
        .update(usersTable)
        .set({
          nftContractAddress: contractAddress,
          profileNftStatus: NftMintStatus.enum.NOT_MINTED,
        })
        .where(eq(usersTable.id, userId));
    }

    if (!serverEnv.SERVER_BASE_URL) {
      throw new Error("Server configuration error prevents NFT minting.");
    }

    const tokenURI = `${serverEnv.SERVER_BASE_URL}/nft-metadata?address=${userAddress}`;

    const mintResult = await mintProfileNFT({
      contractAddress,
      to: userAddress,
      uri: tokenURI,
    });

    // Debug the tokenId
    console.log("Token ID from minting:", mintResult.tokenId);

    if (mintResult.tokenId === null || mintResult.tokenId === undefined) {
      throw new Error("Failed to mint profile NFT");
    }

    // Convert tokenId to number safely - use String first to ensure proper conversion
    const tokenIdNumber = mintResult.tokenId;
    console.log("[DEBUG] Converted tokenId:", tokenIdNumber);

    // Update user status to minted
    await db
      .update(usersTable)
      .set({ profileNftStatus: NftMintStatus.enum.MINTED })
      .where(eq(usersTable.id, userId));

    // Create the updated data object
    const updatedData: Level1PictureSchema = {
      level: "pic",
      prompt,
      image,
      tokenId: tokenIdNumber,
    };

    console.log("[DEBUG] Updating level progression with data:", updatedData);

    // Update level progression with tokenId
    await db
      .update(levelProgressionTable)
      .set({ data: updatedData })
      .where(
        and(
          eq(levelProgressionTable.userId, userId),
          eq(levelProgressionTable.level, "pic"),
        ),
      );

    console.log(
      "[DEBUG] Level progression updated with tokenId:",
      tokenIdNumber,
    );

    return {
      level: "pic",
      levelIndex: 0,
      message:
        "Picture generated, NFT collection deployed, and profile NFT minted!",
    };
  } catch (error) {
    console.error(`[Agent Tool - pic] Error for user ${userId}:`, error);

    // Try to update user status if possible
    try {
      await db
        .update(usersTable)
        .set({ profileNftStatus: NftMintStatus.enum.MINTING_FAILED })
        .where(eq(usersTable.id, userId));
    } catch (dbError) {
      console.error(
        "[Agent Tool - pic] Failed to update user status:",
        dbError,
      );
    }

    return {
      msg: "Picture generated, but there was an issue with NFT creation.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

export const handleItemNftMint = async (props: {
  userId: UserId;
  db: db;
  itemName: string;
  itemDescription: string;
  aiClient: AiClient;
}) => {
  const { userId, db, itemName, itemDescription, aiClient } = props;
  console.log(
    `[Agent Tool - mintItem] Minting item NFT for user ${userId}: ${itemName}`,
  );

  try {
    // 1. Get user data
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.id, userId),
    });

    if (!user?.walletAddress || !isAddress(user.walletAddress)) {
      throw new Error("User data incomplete for NFT operations.");
    }

    const userAddress = user.walletAddress as `0x${string}`;
    let itemContractAddress =
      (user.itemNftContractAddress as `0x${string}`) || null;

    // 2. Deploy item collection if needed
    if (!itemContractAddress) {
      itemContractAddress = await deployItemNFTCollection({
        address: userAddress,
      });

      // Update user record with new item contract address
      await db
        .update(usersTable)
        .set({
          itemNftContractAddress: itemContractAddress,
          itemNftStatus: NftMintStatus.enum.NOT_MINTED,
        })
        .where(eq(usersTable.id, userId));

      console.log(
        `Deployed new item collection at ${itemContractAddress} for user ${userId}`,
      );
    }

    if (!serverEnv.SERVER_BASE_URL) {
      throw new Error("Server configuration error prevents NFT minting.");
    }

    // Generate an image for the item if aiClient is provided
    const itemImage = await generateItemImage({
      aiClient,
      itemName,
      itemDescription,
    });
    

    // 3. Create item record in database
    const itemId = typeIdGenerator("item");
    await db.insert(itemsTable).values({
      id: itemId,
      userId: userId,
      name: itemName,
      description: itemDescription,
      image: itemImage,
      contractAddress: itemContractAddress,
      mintStatus: NftMintStatus.enum.MINTING_IN_PROGRESS,
    });

    // 4. Mint the item NFT
    // For now, we're using the server URL to fetch metadata, but could be IPFS in future
    const tokenURI = `${serverEnv.SERVER_BASE_URL}/item-metadata?address=${userAddress}&itemId=${itemId}`;

    const mintResult = await mintItemNft({
      contractAddress: itemContractAddress,
      to: userAddress,
      uri: tokenURI,
    });

    if (mintResult.tokenId === null) {
      throw new Error("Failed to mint item NFT");
    }

    console.log(
      `Successfully minted item NFT with ID ${mintResult.tokenId} to ${userAddress}`,
    );

    // Update item record with token ID and status
    await db
      .update(itemsTable)
      .set({
        tokenId: String(mintResult.tokenId),
        transactionHash: mintResult.transactionHash,
        mintStatus: NftMintStatus.enum.MINTED,
        updatedAt: new Date(),
      })
      .where(eq(itemsTable.id, itemId));

    // Update user status
    await db
      .update(usersTable)
      .set({ itemNftStatus: NftMintStatus.enum.MINTED })
      .where(eq(usersTable.id, userId));

    return {
      msg: `Item "${itemName}" successfully minted as NFT!`,
      tokenId: mintResult.tokenId,
      transactionHash: mintResult.transactionHash,
      itemId: itemId,
      image: itemImage,
      contractAddress: itemContractAddress,
    };
  } catch (error) {
    console.error(`[Agent Tool - mintItem] Error for user ${userId}:`, error);

    // Update user status if possible
    try {
      await db
        .update(usersTable)
        .set({ itemNftStatus: NftMintStatus.enum.MINTING_FAILED })
        .where(eq(usersTable.id, userId));
    } catch (dbError) {
      console.error(
        "[Agent Tool - mintItem] Failed to update user status:",
        dbError,
      );
    }

    return {
      msg: "There was an issue with item NFT creation.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

async function completeLevel(props: {
  level: AgentLevel;
  levelIndex: number;
  characterSheet: CharacterSchema;
  level1Messages: CoreMessage[];
  aiClient: AiClient;
  userId: UserId;
  db: db;
}): Promise<LevelSchema> {
  const { characterSheet, level1Messages, aiClient, levelIndex, userId, db } =
    props;

  // First AI call: Analyze the result to generate updated character sheet based on interactions
  const updatedCharacterResult = await aiClient.generateObject({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-001",
      provider: "google",
    }),
    system: `You are a Dungeon Master who analyzes player interactions and updates character sheets.
    You've been given a chat history between a player and an AI Dungeon Master.
    
    CAREFULLY UPDATE THE CHARACTER SHEET BASED ON THE ADVENTURE OUTCOME:
    
    1. HP CHANGES: 
       - If the character took damage, reduce current HP accordingly
       - If they healed or rested, increase current HP (but never above max_hp)
       
    2. XP AND LEVELING:
       - Award appropriate XP for combat encounters and puzzle solving
       - If they reach a milestone, increase their level and calculate new stats
       
    3. INVENTORY CHANGES:
       - Add any items found or given during the adventure
       - Remove items that were used up or lost
       - Mark items as equipped if the character started using them
       
    4. SKILL ACQUISITION:
       - Add any new skills, proficiencies, or abilities gained
       - If they've practiced a skill extensively, consider adding proficiency
    
    5. FUNDS AND RESOURCES:
       - Update gold, gems, or other valuables found or spent
       
    Be thorough but realistic with these updates. The changes should reflect
    what actually happened in the adventure.
    
    Here is the character's current sheet
    ${JSON.stringify(characterSheet, null, 2)}
    
    Please analyze the following interactions and update the character sheet accordingly.`,
    messages: level1Messages,
    schema: CharacterSchema,
  });

  let updatedCharacterSheet = updatedCharacterResult.object;
  
  // Validate key character sheet values
  ensureValidStats(updatedCharacterSheet);
  
  // Check for level up
  const levelUpResult = await checkForLevelUp(updatedCharacterSheet);
  if (levelUpResult.leveledUp) {
    console.log(`Character leveled up to level ${levelUpResult.newSheet.character.level}!`);
    updatedCharacterSheet = levelUpResult.newSheet;
  }
  
  console.log("Character sheet updated:", updatedCharacterSheet);

  // Second AI call: Analyze the result to generate items to mint
  const itemsResult = await aiClient.generateObject({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-001",
      provider: "google",
    }),
    system: `You are a Dungeon Master who distributes rewards to players after completing adventures.
    You've been given a chat history between a player and an AI Dungeon Master.
    Your task is to generate appropriate item rewards based on the adventure and the character's actions.
    Items should be thematically appropriate, balanced for the character's level, and interesting.
    The player has completed an adventure at level ${levelIndex}. 
    Their character is: ${JSON.stringify(updatedCharacterSheet.character, null, 2)}
    
    Please analyze the interactions and generate items as rewards.
    Each item should have a name and description.`,
    
    messages: level1Messages,
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      ),
      levelSummary: z
        .string()
        .describe("A brief summary of what happened in this level/adventure"),
    }),
  });

  // If the character leveled up, add it to the summary
  let levelSummary = itemsResult.object.levelSummary;
  if (levelUpResult.leveledUp) {
    levelSummary += ` The character leveled up to level ${updatedCharacterSheet.character.level}!`;
  }

  console.log("Items generated:", itemsResult.object.items);
  console.log("Level summary:", levelSummary);

  // Create array to store minted items
  const mintedItems: ItemSchema[] = [];

  // Mint the generated items
  if (itemsResult.object.items && itemsResult.object.items.length > 0) {
    for (const item of itemsResult.object.items) {
      try {
        console.log(`Minting item: ${item.name}`);
        const mintResult = await handleItemNftMint({
          userId,
          db,
          itemName: item.name,
          itemDescription: item.description,
          aiClient,
        });

        if (mintResult.tokenId !== null && mintResult.itemId !== null) {
          mintedItems.push({
            name: item.name,
            description: item.description,
            image: mintResult.image || "",
            tokenId: Number(mintResult.tokenId),
            contractAddress: mintResult.contractAddress || "",
            mintStatus: "MINTED",
            transactionHash: mintResult.transactionHash || null,
          });
        }
      } catch (error) {
        console.error(`Error minting item ${item.name}:`, error);
        // Continue with other items even if one fails
      }
    }
  } else {
    console.warn("No items generated");
  }

  // Return the complete level result with the updated character sheet, summary, and minted items
  return {
    level: "level",
    levelIndex,
    prompt: "completed level", // Using a default prompt since we're not generating from a prompt
    characterSheet: updatedCharacterSheet,
    levelSummary: levelSummary,
    items: mintedItems,
  };
}

// Helper function to validate character stats
function ensureValidStats(characterSheet: CharacterSchema) {
  // Make sure HP doesn't exceed maximum
  if (characterSheet.status.current_hp !== null && 
      characterSheet.status.max_hp !== null && 
      characterSheet.status.current_hp > characterSheet.status.max_hp) {
    characterSheet.status.current_hp = characterSheet.status.max_hp;
  }
  
  // Ensure level and proficiency bonus are in sync
  const expectedProfBonus = Math.floor((characterSheet.character.level - 1) / 4) + 2;
  characterSheet.character.proficiencyBonus = expectedProfBonus;
  
  // Ensure attribute scores are valid
  if (characterSheet.attributes.strength < 0) characterSheet.attributes.strength = 0;
  if (characterSheet.attributes.dexterity < 0) characterSheet.attributes.dexterity = 0;
  if (characterSheet.attributes.constitution < 0) characterSheet.attributes.constitution = 0;
  if (characterSheet.attributes.intelligence < 0) characterSheet.attributes.intelligence = 0;
  if (characterSheet.attributes.wisdom < 0) characterSheet.attributes.wisdom = 0;
  if (characterSheet.attributes.charisma < 0) characterSheet.attributes.charisma = 0;
  
  if (characterSheet.attributes.strength > 30) characterSheet.attributes.strength = 30;
  if (characterSheet.attributes.dexterity > 30) characterSheet.attributes.dexterity = 30;
  if (characterSheet.attributes.constitution > 30) characterSheet.attributes.constitution = 30;
  if (characterSheet.attributes.intelligence > 30) characterSheet.attributes.intelligence = 30;
  if (characterSheet.attributes.wisdom > 30) characterSheet.attributes.wisdom = 30;
  if (characterSheet.attributes.charisma > 30) characterSheet.attributes.charisma = 30;
  
  // Ensure other values are valid
  if (characterSheet.status.max_hp !== null && characterSheet.status.max_hp < 1) {
    characterSheet.status.max_hp = 1;
  }
  if (characterSheet.status.current_hp !== null && characterSheet.status.current_hp < 0) {
    characterSheet.status.current_hp = 0;
  }
}

// Helper function to check for level up
async function checkForLevelUp(character: CharacterSchema): Promise<{
  leveledUp: boolean;
  newSheet: CharacterSchema;
}> {
  // Copy the character to avoid mutations
  const newSheet = JSON.parse(JSON.stringify(character)) as CharacterSchema;
  const currentLevel = newSheet.character.level;
  const currentXP = newSheet.character.experience;
  
  // D&D 5e XP thresholds for leveling
  const xpThresholds = [
    0, 300, 900, 2700, 6500,    // Levels 1-5
    14000, 23000, 34000, 48000, 64000,  // Levels 6-10
    85000, 100000, 120000, 140000, 165000,  // Levels 11-15
    195000, 225000, 265000, 305000, 355000  // Levels 16-20
  ];
  
  // Check if character has enough XP to level up
  if (currentLevel < 20 && currentXP >= xpThresholds[currentLevel]) {
    // Character levels up!
    newSheet.character.level += 1;
    
    // Update proficiency bonus
    newSheet.character.proficiencyBonus = Math.floor((newSheet.character.level - 1) / 4) + 2;
    
    // Increase HP based on class and constitution modifier
    const conModifier = Math.floor((newSheet.attributes.constitution - 10) / 2);
    const hitDiceValue = getHitDiceValueForClass(newSheet.character.class);
    
    // For level up, take average of hit dice + CON modifier
    const hpIncrease = Math.floor(hitDiceValue / 2) + 1 + conModifier;
    
    // Update max_hp if it's not null
    if (newSheet.status.max_hp !== null) {
      newSheet.status.max_hp += hpIncrease;
      // Heal to full HP on level up (optional, based on your game rules)
      newSheet.status.current_hp = newSheet.status.max_hp;
    }
    
    return { leveledUp: true, newSheet };
  }
  
  return { leveledUp: false, newSheet };
}

function getHitDiceValueForClass(className: string): number {
  const lowerClass = className.toLowerCase();
  if (lowerClass.includes('barbarian')) return 12;
  if (lowerClass.includes('fighter') || lowerClass.includes('paladin') || lowerClass.includes('ranger')) return 10;
  if (lowerClass.includes('bard') || lowerClass.includes('cleric') || lowerClass.includes('druid') || 
      lowerClass.includes('monk') || lowerClass.includes('rogue') || lowerClass.includes('warlock')) return 8;
  if (lowerClass.includes('sorcerer') || lowerClass.includes('wizard')) return 6;
  return 8; // Default fallback
}
