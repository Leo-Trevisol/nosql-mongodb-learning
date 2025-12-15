const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Função utilitária para recuperar o usuário a partir do token JWT
const getUserByToken = async (token) => {   

    // Garante que o token foi informado
    if (!token) {
        return null;
    }

    // Decodifica o token usando a chave secreta
    const decoded = jwt.verify(token, "nossosecret");

    // Extrai o ID do usuário armazenado no token
    const userId = decoded.id;

    // Busca o usuário no banco de dados
    const user = await User.findOne({ _id: userId });

    return user;
};

module.exports = getUserByToken;
