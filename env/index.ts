import "dotenv/config";

import z from "zod";

const schema = z.object({
  DATABASE_URL: z.string(),
});
const _env = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
});

if (!_env.success) {
  throw new Error("Erro com as variáveis de ambiente");
}

export const env = _env.data;
