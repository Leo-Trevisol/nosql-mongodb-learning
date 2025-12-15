<h1 align="center">🔧 Backend - Party Time API</h1>

<p align="center">
  <strong>API REST para gerenciamento de eventos construída com Node.js, Express e MongoDB</strong><br/>
  Sistema completo de autenticação, upload de arquivos e CRUD para aplicação de eventos.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-5.x-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose" />
  <img src="https://img.shields.io/badge/JWT-Autenticação-orange" />
  <img src="https://img.shields.io/badge/Multer-Upload-yellow" />
  <img src="https://img.shields.io/badge/BCrypt-Hashing-lightgrey" />
  <img src="https://img.shields.io/badge/CORS-Enabled-blue" />
</p>

<hr/>

<section id="visao-geral-backend">
  <h2>📋 Visão Geral do Backend</h2>
  <p>
    O backend do <strong>Party Time</strong> é uma API RESTful construída com Node.js e Express que fornece todas as funcionalidades necessárias para o gerenciamento de usuários e eventos. A aplicação segue a arquitetura MVC (Model-View-Controller) com separação clara de responsabilidades.
  </p>
  
  <h3>🔑 Principais Características</h3>
  <ul>
    <li>✅ <strong>Autenticação JWT</strong> com tokens seguros</li>
    <li>✅ <strong>Upload de múltiplas imagens</strong> por evento</li>
    <li>✅ <strong>Controle de acesso granular</strong> (público/privado)</li>
    <li>✅ <strong>Validações de dados</strong> em todas as rotas</li>
    <li>✅ <strong>Proteção por middleware</strong> para rotas sensíveis</li>
    <li>✅ <strong>Armazenamento em disco</strong> com nomes únicos</li>
    <li>✅ <strong>Hashing de senhas</strong> com bcrypt (12 rounds)</li>
  </ul>
</section>

<hr/>

<section id="estrutura-backend">
  <h2>📁 Estrutura de Arquivos</h2>
  
  <pre>
backend/
├── 📄 server.js                 # Ponto de entrada principal
├── 📄 package.json             # Dependências e scripts
├── 📂 helpers/                 # Utilitários e middlewares
│   ├── 📄 check-token.js       # Valida tokens JWT
│   ├── 📄 file-storage.js      # Configuração do Multer
│   └── 📄 get-user-by-token.js # Extrai usuário do token
├── 📂 models/                  # Schemas do Mongoose
│   ├── 📄 User.js             # Modelo de Usuário
│   └── 📄 Party.js            # Modelo de Evento
├── 📂 routes/                  # Rotas da API
│   ├── 📄 authRoutes.js       # Autenticação
│   ├── 📄 userRoutes.js       # Gerenciamento de usuários
│   └── 📄 partyRoutes.js      # Gerenciamento de eventos
└── 📂 public/imgs/            # Imagens uploadadas
  </pre>
</section>

<hr/>

<section id="arquivo-principal">
  <h2>🚀 server.js - Arquivo Principal</h2>
  
  <h3>📦 Dependências Principais</h3>
  <pre>
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
  </pre>
  
  <h3>⚙️ Configuração Inicial</h3>
  <pre>
const dbName = "partytimedb";
const port = 3000;
const app = express();

// Middlewares
app.use(cors());                    // Habilita CORS
app.use(bodyParser.json());         // Parse JSON
app.use(express.static('public'));  // Serve arquivos estáticos
  </pre>
  
  <h3>🛣️ Rotas Configuradas</h3>
  <pre>
app.use("/api/auth", authRouter);   // Rotas de autenticação
app.use("/api/user", userRouter);   // Rotas de usuário
app.use("/api/party", partyRouter); // Rotas de eventos
  </pre>
  
  <h3>🔗 Conexão MongoDB</h3>
  <pre>
mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.error("❌ Erro MongoDB:", err));
  </pre>
</section>

<hr/>

<section id="models">
  <h2>📊 Models - Schemas do Mongoose</h2>
  
  <h3>👤 User.js - Modelo de Usuário</h3>
  <pre>
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
  </pre>
  
  <h3>🎉 Party.js - Modelo de Evento</h3>
  <pre>
const partySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  partyDate: { type: Date, required: true },
  photos: { type: Array, required: false },
  privacy: { type: Boolean },
  userId: { type: mongoose.Schema.Types.ObjectId }
});

const Party = mongoose.model("Party", partySchema);
  </pre>
</section>

<hr/>

<section id="helpers">
  <h2>🛠️ Helpers - Utilitários e Middlewares</h2>
  
  <h3>🔐 check-token.js - Middleware de Autenticação</h3>
  <p><strong>Função:</strong> Verifica validade do token JWT em requisições protegidas</p>
  <pre>
const checkToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied" });
  
  try {
    const verified = jwt.verify(token, "nossosecret");
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
  </pre>
  
  <h3>💾 file-storage.js - Configuração Multer</h3>
  <p><strong>Função:</strong> Gerencia upload de arquivos com nomes únicos baseados em timestamp</p>
  <pre>
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/imgs/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
  </pre>
  
  <h3>👤 get-user-by-token.js - Extrai Usuário</h3>
  <p><strong>Função:</strong> Decodifica token JWT e busca usuário no banco de dados</p>
  <pre>
const getUserByToken = async (token) => {
  if (!token) return null;
  
  const decoded = jwt.verify(token, "nossosecret");
  const userId = decoded.id;
  const user = await User.findOne({_id: userId});
  
  return user;
};
  </pre>
</section>

<hr/>

<section id="fluxo-autenticacao">
  <h2>🔄 Fluxo de Autenticação</h2>
  
  <h3>1. Registro de Usuário</h3>
  <pre>
POST /api/auth/register
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123",
  "confirmpassword": "senha123"
}

→ Valida campos → Verifica email único → Hash da senha → Cria usuário → Gera token JWT
  </pre>
  
  <h3>2. Login</h3>
  <pre>
POST /api/auth/login  
{
  "email": "joao@email.com",
  "password": "senha123"
}

→ Verifica credenciais → Compara hash → Gera token → Retorna userId
  </pre>
  
  <h3>3. Acesso a Rota Protegida</h3>
  <pre>
GET /api/party/userparties
Headers: { "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }

→ checkToken middleware valida → getUserByToken extrai usuário → Retorna dados
  </pre>
</section>

<hr/>

<section id="endpoints-detalhados">
  <h2>📡 Endpoints da API - Detalhamento</h2>
  
  <h3>🎭 Rota de Eventos (partyRoutes.js)</h3>
  
  <h4>POST /api/party - Criar Evento</h4>
  <ul>
    <li><strong>Auth:</strong> ✅ Token obrigatório</li>
    <li><strong>Upload:</strong> ✅ Múltiplas imagens (campo "photos")</li>
    <li><strong>Body:</strong> title, description, party_date, privacy</li>
    <li><strong>Retorno:</strong> Evento criado com array de paths das imagens</li>
  </ul>
  
  <h4>GET /api/party/:id - Buscar Evento Único</h4>
  <ul>
    <li><strong>Lógica inteligente:</strong> Verifica se evento é público</li>
    <li><strong>Se privado:</strong> Exige token e verifica se usuário é dono</li>
    <li><strong>Se público:</strong> Retorna para qualquer requisição</li>
  </ul>
  
  <h4>PUT /api/party - Atualizar Evento</h4>
  <ul>
    <li><strong>Validação:</strong> Verifica se userId do token = userId do evento</li>
    <li><strong>Upload opcional:</strong> Pode adicionar novas fotos</li>
    <li><strong>Mantém:</strong> Fotos antigas se não enviar novas</li>
  </ul>
</section>

<hr/>

<section id="seguranca">
  <h2>🛡️ Medidas de Segurança</h2>
  
  <h3>🔒 Implementadas</h3>
  <ul>
    <li>✅ <strong>JWT com secret</strong> para autenticação stateless</li>
    <li>✅ <strong>bcrypt com salt rounds 12</strong> para hashing de senhas</li>
    <li>✅ <strong>Middleware de proteção</strong> em todas rotas sensíveis</li>
    <li>✅ <strong>Validação de propriedade</strong> antes de operações</li>
    <li>✅ <strong>Nomes únicos de arquivos</strong> para evitar conflitos</li>
  </ul>
  
  <h3>⚠️ Recomendações para Produção</h3>
  <ul>
    <li>🔸 Mover secret JWT para variáveis de ambiente</li>
    <li>🔸 Implementar rate limiting</li>
    <li>🔸 Adicionar validação de tipos de arquivo</li>
    <li>🔸 Configurar HTTPS</li>
    <li>🔸 Usar helmet.js para headers de segurança</li>
  </ul>
</section>

<hr/>

<section id="configuracao">
  <h2>⚙️ Configuração e Execução</h2>
  
  <h3>📦 package.json - Dependências</h3>
  <pre>
{
  "dependencies": {
    "bcrypt": "^6.0.0",        // Hashing de senhas
    "body-parser": "^2.2.1",   // Parse de JSON
    "cors": "^2.8.5",         // Cross-Origin Resource Sharing
    "express": "^5.2.1",      // Framework web
    "jsonwebtoken": "^9.0.3", // Tokens JWT
    "mongoose": "^9.0.1",     // ODM MongoDB
    "multer": "^2.0.2"        // Upload de arquivos
  },
  "scripts": {
    "start": "nodemon ./server.js localhost:3000"
  }
}
  </pre>
  
  <h3>🚀 Comandos para Executar</h3>
  <pre>
# Instalar dependências
npm install

# Iniciar MongoDB (em outro terminal)
mongod

# Executar aplicação em desenvolvimento
npm start

# A API estará disponível em:
# http://localhost:3000
  </pre>
</section>

<hr/>

<section id="exemplos-requisicoes">
  <h2>📝 Exemplos de Requisições</h2>
  
  <h3>Registro de Usuário</h3>
  <pre>
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Souza",
    "email": "maria@email.com",
    "password": "senha123",
    "confirmpassword": "senha123"
  }'
  </pre>
  
  <h3>Criação de Evento com Imagem</h3>
  <pre>
curl -X POST http://localhost:3000/api/party \
  -H "auth-token: seu_token_jwt_aqui" \
  -F "title=Festa de Aniversário" \
  -F "description=Vai ser incrível!" \
  -F "party_date=2024-12-31T20:00:00" \
  -F "privacy=false" \
  -F "photos=@/caminho/da/foto.jpg"
  </pre>
  
  <h3>Buscar Eventos do Usuário</h3>
  <pre>
curl -X GET http://localhost:3000/api/party/userparties \
  -H "auth-token: seu_token_jwt_aqui"
  </pre>
</section>

<hr/>

<section id="consideracoes">
  <h2>💡 Considerações Técnicas</h2>
  
  <h3>✅ Pontos Fortes</h3>
  <ul>
    <li>Arquitetura limpa e organizada</li>
    <li>Separação clara de responsabilidades</li>
    <li>Sistema de autenticação robusto</li>
    <li>Upload de múltiplos arquivos funcional</li>
    <li>Controle de acesso granular bem implementado</li>
  </ul>
  
  <h3>🔧 Melhorias Potenciais</h3>
  <ul>
    <li>Implementar variáveis de ambiente</li>
    <li>Adicionar validações mais robustas</li>
    <li>Criar sistema de logging</li>
    <li>Implementar paginação nas listagens</li>
    <li>Adicionar testes automatizados</li>
  </ul>
</section>

<hr/>

<div align="center">
  <p><strong>Backend desenvolvido para aprendizado de MongoDB, Node.js e APIs REST</strong></p>
  <p>Pronto para integração com frontend Vue.js 🚀</p>
</div>
