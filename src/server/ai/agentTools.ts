import { AgentLevel } from "../db/chat/chat.zod";

import { tool } from "ai";

import { z } from "zod";
import { levelProgressionTable, usersTable, type CharacterSchema, type Level1PictureSchema, type Level1Schema, type Level1SheetSchema, type Level2Schema, NftMintStatus } from "../db/chat/chat.db";
import { generateCharacterPic, generateCharacterSheet } from "./generateCharacterPic";
import type { UserId } from "../db/typeid";
import type { AiClient } from "./aiClient";
import type { db } from "../db/db";
import { desc, eq } from "drizzle-orm";
import { isAddress } from "viem";
import { mintProfileNFT } from "../web3/deployProfileNFTCollection";
import { deployProfileNFTCollection } from "../web3/deployProfileNFTCollection";
import { serverEnv } from "../serverEnv";

export const createAgentTools= (props: {
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
            console.log(`[Agent Tool - pic] User ${userId} finishing pic level.`);
            return await handlePicLevel({
              userId,
              aiClient,
              db,
              prompt: args.data,
            });
          }
          case "sheet": {
            console.log(`[Agent Tool - sheet] User ${userId} finishing sheet level.`);
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
            console.log(`[Agent Tool - sheet] Saved level1-sheet progression for user ${userId}.`);
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
  const image = await generateCharacterPic({
    aiClient,
    prompt: prompt,
  });

  await db.insert(levelProgressionTable).values({
    level: "level1-picture",
    userId: userId,
    data: {
      type: "level1-picture",
      prompt: prompt,
      image: image,
      tokenId: null,
    } satisfies Level1PictureSchema,
  });
  console.log(`[Agent Tool - pic] Saved level1-picture progression for user ${userId}.`);

  try {
    const user = await db.query.usersTable.findFirst({
      where: eq(usersTable.id, userId),
    });

    if (!user || !user.walletAddress || !isAddress(user.walletAddress)) {
      console.error(`[Agent Tool - pic] User ${userId} not found or has invalid wallet address.`);
      throw new Error("User data incomplete for NFT operations.");
    }

    let contractAddress = user.nftContractAddress ? user.nftContractAddress as `0x${string}` : null;
    const userAddress = user.walletAddress as `0x${string}`;

    if (!contractAddress) {
       console.log(`[Agent Tool - pic] No contract found for user ${userId}. Deploying...`);
       const shortAddress = `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`;
       const name = `Forehead ${shortAddress}`;
       const symbol = `FH${shortAddress.replace(/\.|0x/g, "")}`;
       contractAddress = await deployProfileNFTCollection({ name, symbol });
       
       await db.update(usersTable)
         .set({ nftContractAddress: contractAddress, profileNftStatus: NftMintStatus.enum.NOT_MINTED })
         .where(eq(usersTable.id, userId));
       console.log(`[Agent Tool - pic] Deployed contract ${contractAddress} for user ${userId} and updated DB.`);
    }

    // Try minting if not minted or if a previous attempt failed
    if (contractAddress && (user.profileNftStatus === NftMintStatus.enum.NOT_MINTED || user.profileNftStatus === NftMintStatus.enum.MINTING_FAILED)) {
        console.log(`[Agent Tool - pic] Contract ${contractAddress} exists, profile NFT status is ${user.profileNftStatus} for user ${userId}. Minting...`);

        if (!serverEnv.SERVER_BASE_URL) {
           console.error("[Agent Tool - pic] SERVER_BASE_URL environment variable is not set. Cannot construct token URI.");
           throw new Error("Server configuration error prevents NFT minting.");
        }
        const tokenURI = `${serverEnv.SERVER_BASE_URL}/nft-metadata?address=${userAddress}`;
        console.log(`[Agent Tool - pic] Using Token URI: ${tokenURI}`);

        const mintResult = await mintProfileNFT({
           contractAddress: contractAddress,
           to: userAddress,
           uri: tokenURI,
        });

        await db.update(usersTable)
          .set({ profileNftStatus: NftMintStatus.enum.MINTED })
          .where(eq(usersTable.id, userId));

          if (!mintResult.tokenId) {
             throw new Error("Failed to mint profile NFT");
          }
          

        // update level progression table with tokenId
        await db.update(levelProgressionTable)
          .set({ data: {
           type: "level1-picture",
           prompt: prompt,
           image: image,
           tokenId: Number(mintResult.tokenId),
         } satisfies Level1PictureSchema,
        })
          .where(eq(levelProgressionTable.userId, userId));

        console.log(`[Agent Tool - pic] Minted profile NFT for user ${userId}. Tx: ${mintResult.transactionHash}. Updated DB.`);
        return {
         msg: "Picture generated, NFT collection deployed, and profile NFT minted!",
        };
    }

    // If status is neither NOT_MINTED, MINTING_FAILED, nor MINTED, log a warning.
    console.warn(`[Agent Tool - pic] Could not mint for user ${userId}. Contract Address: ${contractAddress}, Minted Status: ${user.profileNftStatus}`);
    return {
      msg: "Picture generated, but cannot mint profile NFT due to missing contract or unexpected status.",
    };

  } catch (nftError: unknown) {
     console.error(`[Agent Tool - pic] Error during NFT deployment/minting for user ${userId}:`, nftError);
     try {
        await db.update(usersTable)
           .set({ profileNftStatus: NftMintStatus.enum.MINTING_FAILED })
           .where(eq(usersTable.id, userId));
        console.log(`[Agent Tool - pic] Updated profile NFT status to MINTING_FAILED for user ${userId} due to error.`);
     } catch (dbError) {
        console.error("[Agent Tool - pic] Failed to update user status to MINTING_FAILED after NFT error:", dbError);
     }
     return {
        msg: "Picture generated, but there was an issue with NFT creation. Status marked as failed. Please check server logs.",
        error: nftError instanceof Error ? nftError.message : String(nftError)
     };
  }
};

async function completeLevel1(props: {
  characterSheet: CharacterSchema;
}) {
  console.log("completeLevel1", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level1Summary: "This is a test",
    prompt: "This is a test",
    type: "level1",
  } satisfies Level1Schema;
}

async function completeLevel2(props: {
  characterSheet: CharacterSchema;
}) {
  console.log("completeLevel2", props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    characterSheet: props.characterSheet,
    level2Summary: "This is a test",
    prompt: "This is a test",
    type: "level2",
  } satisfies Level2Schema;
}