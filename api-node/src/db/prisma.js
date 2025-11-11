// Importa a classe PrismaClient do pacote "@prisma/client".
// Essa classe é o ponto de acesso principal para o banco de dados.
// Ela fornece métodos para realizar operações CRUD (Create, Read, Update, Delete) 
// em cada modelo definido no schema.prisma.
import { PrismaClient } from "@prisma/client";

// Cria uma instância única do Prisma Client.
// Essa instância é usada para interagir com o banco de dados durante toda a execução da aplicação.
// O "export const" permite que outros arquivos (como rotas) importem e reutilizem essa mesma instância.
export const prisma = new PrismaClient();

// Registra um listener no evento "beforeExit" do processo Node.js.
// Esse evento é disparado automaticamente pouco antes do Node encerrar a execução.
process.on("beforeExit", async () => {
  // Encerra a conexão com o banco de dados de forma segura antes de o processo terminar.
  // Isso evita que conexões fiquem abertas e garante o fechamento limpo do Prisma Client.
  await prisma.$disconnect();
});
