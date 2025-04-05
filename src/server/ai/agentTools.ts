import { AgentLevel } from "../db/chat/chat.zod";

import { tool } from "ai";

import { z } from "zod";
import {
  levelProgressionTable,
  usersTable,
  type CharacterSchema,
  type Level1PictureSchema,
  type Level1Schema,
  type Level1SheetSchema,
  type Level2Schema,
  NftMintStatus,
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
import { serverEnv } from "../serverEnv";

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
    description: "Call this tool to finish the level",
    parameters: z.object({
      level: AgentLevel,
      data: z.string(),
    }),
    execute: async (args) => {
      try {
        switch (args.level) {
          case "pic": {
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
          case "sheet": {
            console.log(
              `[Agent Tool - sheet] User ${userId} finishing sheet level.`,
            );
            const characterSheet = await generateCharacterSheet({
              aiClient,
              prompt: args.data,
            });
            await db.insert(levelProgressionTable).values({
              level: "level1-sheet",
              userId: userId,
              data: {
                type: "level1-sheet",
                prompt: args.data,
                characterSheet: characterSheet,
              } satisfies Level1SheetSchema,
            });
            console.log(
              `[Agent Tool - sheet] Saved level1-sheet progression for user ${userId}.`,
            );
            return {
              msg: "Sheet generated and user moved to next level",
            };
          }
          case "level1": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.type !== "level1-sheet") {
              throw new Error("User is not in level 1");
            }
            const result = await completeLevel1({
              characterSheet: latestLevel.data.characterSheet,
            });
            console.log({
              msg: "Level 1 generated and user moved to next level",
              result,
            });
            await db.insert(levelProgressionTable).values({
              level: "level1",
              userId: userId,
              data: {
                type: "level1",
                prompt: args.data,
                characterSheet: result.characterSheet,
                level1Summary: result.level1Summary,
              } satisfies Level1Schema,
            });
            return {
              msg: "Level 1 generated and user moved to next level",
            };
          }
          case "level2": {
            const latestLevel = await db.query.levelProgressionTable.findFirst({
              where: eq(levelProgressionTable.userId, userId),
              orderBy: desc(levelProgressionTable.createdAt),
            });
            if (latestLevel?.data.type !== "level1") {
              throw new Error("User is not in level 1");
            }
            const result = await completeLevel2({
              characterSheet: latestLevel.data.characterSheet,
            });
            await db.insert(levelProgressionTable).values({
              level: "level2",
              userId: userId,
              data: result,
            });
            return {
              msg: "Level 2 generated and user moved to next level",
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
      level: "level1-picture",
      userId,
      data: {
        type: "level1-picture",
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

    if (!mintResult.tokenId) {
      throw new Error("Failed to mint profile NFT");
    }
    
    // Debug the tokenId
    console.log("[DEBUG tokenId]", {
      rawTokenId: mintResult.tokenId,
      type: typeof mintResult.tokenId,
      stringVersion: String(mintResult.tokenId),
    });
    
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
      type: "level1-picture",
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
          eq(levelProgressionTable.level, "level1-picture"),
        ),
      );
    
    console.log("[DEBUG] Level progression updated with tokenId:", tokenIdNumber);
    
    return {
      msg: "Picture generated, NFT collection deployed, and profile NFT minted!",
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

async function completeLevel1(props: { characterSheet: CharacterSchema }) {
  console.log("completeLevel1", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level1Summary: "This is a test",
    prompt: "This is a test",
    type: "level1",
  } satisfies Level1Schema;
}

async function completeLevel2(props: { characterSheet: CharacterSchema }) {
  console.log("completeLevel2", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level2Summary: "This is a test",
    prompt: "This is a test",
    type: "level2",
  } satisfies Level2Schema;
}
