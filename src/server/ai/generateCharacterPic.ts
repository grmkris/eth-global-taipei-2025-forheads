
import { CharacterSchema } from "../db/schema";
import type { AiClient } from "./aiClient";

export const generateCharacterPic = async (props: {
  aiClient: AiClient;
  prompt: string
}) => {
  const { aiClient, prompt } = props;

  const response = await aiClient.generateText({
    model: aiClient.getModel({
      modelId: "gemini-2.0-flash-001",
      provider: "google",
    }),
    providerOptions: {
      google: { responseModalities: ['IMAGE', 'TEXT'] },
    },
    temperature: 1,
    system:
      "You are a character artist. You will be given a prompt and you will need to generate an image of a character.",
    prompt: prompt,
  });

  for (const m of response.response.messages) {
    if (m.content) {
      console.log({
        "donedonedonedone": m.id,
        "content": m.content,
        "id": m.id,
        "role": m.role,
      });
    }
  }

  console.log({
    "done": "DONEDONEDONE",
    response,
  });

  const messages = response.response.messages.map((m) => {
    if (m.content) {
      return {
        "id": m.id,
        "content": m.content,
      };
    }
  });

  console.log({
    "messages": JSON.stringify(messages, null, 2),
  });

  console.log({
    "files": response.files,
  });

  try {
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
  } catch (error) {
    console.error({
      "error": error,
    });
  }

  return "this is fake base64 image data";
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
    system: "You are a character builder. You will be given a prompt and you will need to generate a character attributes sheet in json format.",
    prompt: prompt,
    schema: CharacterSchema,
  });

  return response.object;
};
