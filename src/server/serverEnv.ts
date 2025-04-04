import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const serverEnv = envSchema.parse(process.env);
