import { experimental_generateImage } from "ai";
import { type AIModelConfig, getModel } from "./providers";
import { LiteralClient } from "@literalai/client";
import { serverEnv } from "../serverEnv";

export interface AiClientConfig {
  providerConfigs: {
    googleGeminiApiKey: string;
  };
}
export type AiProviderCredentials = AiClientConfig["providerConfigs"];

const literalAiClient = new LiteralClient({
  apiKey: serverEnv.LITERAL_API_KEY,
});

const streamText = literalAiClient.instrumentation.vercel.streamText;
const generateText = literalAiClient.instrumentation.vercel.generateText;
const generateObject = literalAiClient.instrumentation.vercel.generateObject;
const streamObject = literalAiClient.instrumentation.vercel.streamObject;

export const createAiClient = (config: AiClientConfig) => {
  return {
    getModel: (aiConfig: AIModelConfig) => {
      switch (aiConfig.provider) {
        case "google":
          return getModel({
            modelConfig: aiConfig,
            providerConfig: {
              provider: "google",
              apiKey: config.providerConfigs.googleGeminiApiKey,
            },
          });
        default:
          throw new Error(`Unsupported provider: ${JSON.stringify(aiConfig)}`);
      }
    },
    generateObject,
    streamObject,
    generateText,
    streamText,
    generateImage: experimental_generateImage,
  };
};

export type AiClient = ReturnType<typeof createAiClient>;
