// src/validation/productSchema.js
import { z } from "zod";

export const productCreateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(80, "O nome deve ter no máximo 80 caracteres"),
  price_cents: z.coerce
    .number()
    .int("O preço deve ser um número inteiro")
    .min(100, "O preço deve ser no mínimo 100")
    .max(1_000_000, "Máximo 1.000.000"),
  published: z.coerce.boolean().default(false),
});
