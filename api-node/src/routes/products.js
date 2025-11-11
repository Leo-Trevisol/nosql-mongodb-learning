// Importa o módulo "Router" do Express, usado para criar um conjunto de rotas separado.
import { Router } from "express";

// Importa a instância do Prisma Client, responsável pela comunicação com o banco de dados.
import { prisma } from "../db/prisma.js";

// Importa o esquema de validação criado com Zod para validar os dados de produtos.
import { productCreateSchema } from "../validation/productSchema.js";

// Cria um novo roteador (subaplicativo) do Express, que agrupa rotas relacionadas a "products".
const router = Router();


// =============================================================
// Rota POST /products — cria um novo produto no banco de dados.
// =============================================================
router.post("/", async (req, res) => {
  // Loga no console quando a rota POST /products é chamada (útil para debug).
  console.log("➡️ Recebi POST /products");
  console.log("Body recebido:", req.body);

  try {
    // Valida o corpo da requisição (req.body) usando o esquema do Zod.
    // O método safeParse() retorna um objeto com "success" e, se falhar, uma lista de erros.
    const parsed = productCreateSchema.safeParse(req.body);

    // Se a validação falhar, retorna erro 400 (Bad Request) com detalhes da validação.
    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: "validation_error", details: parsed.error.issues });
    }

    // Se os dados forem válidos, cria um novo registro no banco usando Prisma.
    // "parsed.data" contém os dados já validados e convertidos pelo Zod.
    const created = await prisma.product.create({ data: parsed.data });

    // Retorna o produto criado com status 201 (Created).
    res.status(201).json(created);

  } catch (error) {
    // Captura qualquer erro inesperado (como problema no banco) e loga no console.
    console.error("Erro no POST /products:", error);

    // Retorna um erro 500 (Internal Server Error) com a mensagem do erro.
    res.status(500).json({ error: "server_error", details: error.message });
  }
});


// =============================================================
// Rota GET /products — lista todos os produtos cadastrados.
// =============================================================
router.get("/", async (req, res) => {
  // Busca todos os produtos do banco, ordenados por ID de forma decrescente (mais recente primeiro).
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  // Retorna a lista de produtos em formato JSON.
  res.json(products);
});


// Exporta o roteador para ser usado no servidor principal (server.js),
// onde será montado no caminho base "/products".
export default router;
