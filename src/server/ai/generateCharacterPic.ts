import type { AiClient } from "./aiClient";

export const generateCharacterPic = async (props: {
  aiClient: AiClient;
  prompt: Record<string, Record<string, string>>;
}) => {
  const { aiClient, prompt } = props;

  const response = await aiClient.generateText({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-exp",
      provider: "google",
    }),
    providerOptions: {
      google: { responseModalities: ["TEXT", "IMAGE"] },
    },
    system:
      "You are a character artist. You will be given a prompt and you will need to generate a character image.",
    prompt: JSON.stringify(prompt),
  });

  for (const file of response.files) {
    if (file.mimeType.startsWith("image/")) {
      // The file object provides multiple data formats:
      // Access images as base64 string, Uint8Array binary data, or check type
      // - file.base64: string (data URL format)
      // - file.uint8Array: Uint8Array (binary data)
      // - file.mimeType: string (e.g. "image/png")
      return file.base64;
    }
  }

  throw new Error("No image found in the response");
};
