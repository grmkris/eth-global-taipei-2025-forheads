
import { generateObject, generateText, streamObject, streamText } from "ai";
import { type AIModelConfig, getModel } from "./providers";


export interface AiClientConfig {
	providerConfigs: {
		googleGeminiApiKey: string;
	};
}
export type AiProviderCredentials = AiClientConfig["providerConfigs"];

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
	};
};

export type AiClient = ReturnType<typeof createAiClient>;
