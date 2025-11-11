// Importa a biblioteca "zod", que é usada para validação e definição de esquemas de dados.
import { z } from "zod";

// Exporta um esquema de validação chamado "productCreateSchema",
// que define como deve ser a estrutura e as regras dos dados de um produto.
export const productCreateSchema = z.object({
  // Campo "name" — nome do produto
  name: z
    .string() // Deve ser do tipo string
    .trim() // Remove espaços em branco no início e no fim da string
    .min(3, "O nome deve ter pelo menos 3 caracteres") // Mínimo de 3 caracteres
    .max(80, "O nome deve ter no máximo 80 caracteres"), // Máximo de 80 caracteres

  // Campo "price_cents" — preço do produto em centavos
  price_cents: z.coerce // Usa "coerce" para converter automaticamente strings numéricas em número (ex: "1500" → 1500)
    .number() // Deve ser um número
    .int("O preço deve ser um número inteiro") // Não pode ter casas decimais
    .min(100, "O preço deve ser no mínimo 100") // Valor mínimo permitido
    .max(1_000_000, "Máximo 1.000.000"), // Valor máximo permitido

  // Campo "published" — indica se o produto está publicado ou não
  published: z.coerce // Converte valores como "true"/"false" (string) para boolean automaticamente
    .boolean() // Deve ser um booleano (true ou false)
    .default(false), // Caso o campo não seja enviado, o valor padrão será "false"
});
