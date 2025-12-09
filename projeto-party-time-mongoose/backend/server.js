//Modules

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Routes

const authRoutes = require("./routes/authRoutes");

//Middlewares

//Config

const dbName = "partytimedb";
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api/auth", authRoutes);

//Atrelar rotas no express


//Conexão com o banco de dados mongoDB

mongoose.connect(`mongodb://localhost/${dbName}`)

app.get("/", (req, res) => {
    res.json("Welcome to Party Time API!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});