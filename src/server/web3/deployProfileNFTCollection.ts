import { createWalletClient, getContract, http, decodeEventLog, parseAbiItem } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { serverEnv } from "../serverEnv";
import { contractAddresses } from "./contract_addresses";
import { factoryABI } from "./factoryABI";
import { flowMainnet } from "viem/chains";
import { waitForTransactionReceipt } from "viem/actions";
import { forehead721ABI } from "./forehead721ABI";
import { encodeEventTopics } from "viem";

export const deployProfileNFTCollection = async (props: {
  name: string;
  symbol: string;
}) => {
  const { name, symbol } = props;

  const walletClient = createWalletClient({
    account: privateKeyToAccount(serverEnv.PRIVATE_KEY as `0x${string}`),
    transport: http(),
    chain: flowMainnet,
  });

  const contract = getContract({
    address: contractAddresses.flowMainnet,
    abi: factoryABI,
    client: walletClient,
  });

  const tx = await contract.write.deployNFTContract([name, symbol], {
    account: walletClient.account,
    chain: flowMainnet
  });
  const receipt = await waitForTransactionReceipt(walletClient, { hash: tx });

  console.log("Deployment Receipt:", receipt);

  // Find and decode the NFTContractDeployed event log
  const deployEventSignature = parseAbiItem('event NFTContractDeployed(address indexed contractAddress, address indexed deployer, string name, string symbol)');
  // Pre-calculate the signature hash (topic0)
  const deployEventTopic = encodeEventTopics({ abi: [deployEventSignature] })[0];

  let deployedContractAddress: `0x${string}` | null = null;

  for (const log of receipt.logs) {
    // Check if the log's topic0 matches the event signature BEFORE trying to decode
    if (log.topics[0] === deployEventTopic) {
      try {
        const decodedLog = decodeEventLog({
          abi: [deployEventSignature],
          data: log.data,
          topics: log.topics,
        });

        // Since we matched the topic, we can be more confident it's our event
        // Although checking eventName is still good practice if the ABI had multiple events
        if (decodedLog.eventName === 'NFTContractDeployed') {
          deployedContractAddress = (decodedLog.args as { contractAddress: `0x${string}` }).contractAddress;
          console.log("Deployed Contract Address from event:", deployedContractAddress);
          break; // Exit loop once found
        }
      } catch (e: unknown) {
        // Handle potential decoding errors even if topic matches (e.g., corrupted data)
        console.error("Error decoding NFTContractDeployed event log:", log, "Error:", e instanceof Error ? e.message : e);
      }
    }
    // No 'else' or 'catch' needed here for non-matching logs, silencing the warning
  }

  if (!deployedContractAddress) {
    console.error("Could not find NFTContractDeployed event in transaction logs.", receipt);
    throw new Error("Failed to extract deployed contract address from transaction receipt.");
  }

  return deployedContractAddress;
};

export const mintProfileNFT = async (props: {
  contractAddress: `0x${string}`; // Expecting 0x prefixed address
  to: `0x${string}`; // Expecting 0x prefixed address
  uri: string; // Changed from tokenId to uri
}) => {
  const { contractAddress, to, uri } = props; // Updated props

  const walletClient = createWalletClient({
    account: privateKeyToAccount(serverEnv.PRIVATE_KEY as `0x${string}`),
    transport: http(),
    chain: flowMainnet,
  });

  const contract = getContract({
    address: contractAddress, // Already 0x${string} from props
    abi: forehead721ABI, // Use the specific contract ABI
    client: walletClient,
  });

  // Call the correct safeMint function with uri
  const tx = await contract.write.safeMint([to, uri], {
    account: walletClient.account,
    chain: flowMainnet,
  });

  const txResult = await waitForTransactionReceipt(walletClient, { hash: tx });

  console.log("Minting Result:", txResult);

  const tokenId = txResult.logs[0].data;

  return {
    tokenId,
    transactionHash: tx,
  };
};

