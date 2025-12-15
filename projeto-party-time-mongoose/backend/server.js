// =======================
// Importação de módulos
// =======================

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// =======================
// Importação das rotas
// =======================

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const partyRouter = require("./routes/partyRoutes");

// =======================
// Configurações iniciais
// =======================

const dbName = "partytimedb";
const port = 3000;
const app = express();

// =======================
// Middlewares globais
// =======================

// Libera acesso entre domínios (frontend Vue)
app.use(cors());

// Permite leitura de JSON no body das requisições
app.use(bodyParser.json());

// Torna a pasta "public" acessível (imagens enviadas via multer)
app.use(express.static('public'));

// =======================
// Registro das rotas da API
// =======================

app.use("/api/auth", authRouter);   // Autenticação (login e registro)
app.use("/api/user", userRouter);   // Perfil e atualização de usuário
app.use("/api/party", partyRouter); // CRUD de festas

// =======================
// Conexão com o MongoDB
// =======================

mongoose.connect(`mongodb://localhost/${dbName}`);

// =======================
// Rota base
// =======================

app.get("/", (req, res) => {
    res.json("Welcome to Party Time API!");
});

// =======================
// Inicialização do servidor
// =======================

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
