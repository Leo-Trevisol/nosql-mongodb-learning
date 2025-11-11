// Importa o framework Express, responsável por criar e gerenciar o servidor HTTP e as rotas da API.
import express from "express";

// Importa o módulo dotenv, usado para carregar variáveis de ambiente a partir do arquivo .env.
import dotenv from "dotenv";

// Importa o arquivo de rotas de produtos, que contém os endpoints relacionados a /products.
import productsRouter from "./routes/products.js";

// Executa a função config() do dotenv para carregar as variáveis definidas no arquivo .env para process.env.
dotenv.config();

// Cria uma instância do aplicativo Express, que representa o servidor.
const app = express();

// Adiciona um middleware que faz o parsing automático de JSON no corpo das requisições (req.body).
app.use(express.json());

// Lê a variável de ambiente PORT definida no .env, que indica a porta em que o servidor vai rodar.
const PORT = process.env.PORT;

// Define uma rota GET simples de verificação de saúde (“health check”), 
// usada para confirmar se o servidor está online e respondendo.
app.get("/health", (req, res) => res.json({ ok: true }));

// Registra o conjunto de rotas de produtos no caminho base "/products".
// Ou seja, todas as rotas definidas em productsRouter ficarão acessíveis a partir de /products.
app.use("/products", productsRouter);

// Inicia o servidor Express na porta definida em PORT.
// O callback é executado quando o servidor começa a rodar, exibindo uma mensagem no console.
app.listen(PORT, () => {
  console.log(`API está rodando na porta ${PORT}`);
});
