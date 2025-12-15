const jwt = require("jsonwebtoken");

// Middleware responsável por validar o token JWT enviado na requisição
const checkToken = (req, res, next) => {

    // Recupera o token do header da requisição
    const token = req.header("auth-token");

    // Bloqueia o acesso caso o token não seja informado
    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }

    try {
        // Valida e decodifica o token usando a chave secreta
        const verified = jwt.verify(token, "nossosecret");

        // Armazena os dados do usuário decodificados na requisição
        req.user = verified;

        // Permite que a requisição continue para a próxima camada
        next();

    } catch (error) {
        // Token inválido ou expirado
        res.status(400).json({ error: "Invalid token" });
    }
};

module.exports = checkToken;
