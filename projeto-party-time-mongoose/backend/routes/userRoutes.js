const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// Middleware para validação do token JWT
const verifyToken = require("../helpers/check-token");

// Helper para recuperar o usuário a partir do token
const getUserByToken = require("../helpers/get-user-by-token");

/**
 * Retorna os dados de um usuário pelo ID
 * - Rota protegida
 * - Remove o campo password da resposta
 */
router.get("/:id", verifyToken, async (req, res) => {

    const id = req.params.id;

    // Busca o usuário sem retornar a senha
    try {
        const user = await User.findOne({ _id: id }, "-password");
        res.json({ error: null, user });

    } catch (err) {
        return res.status(400).json({ error: "User not exists" });
    }
});

/**
 * Atualização de dados do usuário
 * - Apenas o próprio usuário pode atualizar seus dados
 * - Permite atualização opcional de senha
 */
router.put("/", verifyToken, async (req, res) => {

    // Token enviado no header
    const token = req.header("auth-token");

    // Usuário autenticado
    const user = await getUserByToken(token);

    const userReqId = req.body.id;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const userId = user._id.toString();

    // Garante que o usuário autenticado é o dono da conta
    if (userId !== userReqId) {
        return res.status(401).json({ error: "Access denied" });
    }

    // Dados básicos que podem ser atualizados
    const updatedData = {
        name: req.body.name,
        email: req.body.email
    };

    // Verifica se a senha será atualizada
    if (password != confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    } else if (password == confirmPassword && password != null) {

        // Gera hash da nova senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        updatedData.password = passwordHash;
    }

    try {
        // Atualiza o usuário e retorna o novo documento
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: updatedData },
            { new: true }
        );

        res.json({ error: null, msg: "User updated successfully", data: updatedUser });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
