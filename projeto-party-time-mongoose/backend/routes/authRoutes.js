const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// Rota responsável pelo cadastro de usuários
router.post("/register", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmpassword;

    // Valida se todos os campos obrigatórios foram preenchidos
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    // Verifica se o email já está cadastrado
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
        return res.status(400).json({ error: "Email already registered" });
    }

    // Gera hash da senha usando bcrypt
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Cria o usuário com a senha criptografada
    const user = new User({
        name,
        email,
        password: passwordHash,
    });

    try {
        const newUser = await user.save();

        // Gera o token JWT após o cadastro
        const token = jwt.sign(
            {
                name: newUser.name,
                id: newUser._id,
            },
            "nossosecret"
        );

        // Retorna token para autenticação no frontend
        res.json({ error: null, msg: "User created successfully", token: token });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Rota responsável pelo login de usuários
router.post("/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    // Valida campos obrigatórios
    if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Busca usuário pelo email
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }

    // Compara a senha informada com o hash salvo no banco
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({ error: "Invalid password" });
    }

    // Gera token JWT para autenticação
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id,
        },
        "nossosecret"
    );

    // Retorna token e id do usuário para o frontend
    res.json({
        error: null,
        msg: "Login successful",
        token: token,
        userId: user._id
    });
});

module.exports = router;
