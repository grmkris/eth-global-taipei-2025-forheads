import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  GOOGLE_GEMINI_API_KEY: z.string(),
});

export const serverEnv = envSchema.parse(process.env);
