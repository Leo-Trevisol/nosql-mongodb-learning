const router = require("express").Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/user");
const Party = require("../models/party");

// Configuração de armazenamento de arquivos (multer)
const diskStorage = require("../helpers/file-storage");
const upload = multer({ storage: diskStorage });

// Middleware para validação de token JWT
const verifyToken = require("../helpers/check-token");

// Helper para recuperar usuário a partir do token
const getUserByToken = require("../helpers/get-user-by-token");

/**
 * Criação de uma nova festa
 * - Rota protegida
 * - Suporta upload de imagens
 */
router.post("/", verifyToken, upload.fields([{ name: "photos" }]), async (req, res) => {

    // Dados recebidos via body
    const title = req.body.title;
    const description = req.body.description;
    const partyDate = req.body.party_date;

    let files = [];

    // Arquivos enviados (imagens)
    if (req.files) {
        files = req.files.photos;
    }

    // Validação dos campos obrigatórios
    if (!title || title.trim() === "" || description.trim() === "" || !partyDate || partyDate.trim() === "") {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Recupera usuário autenticado via token
    const token = req.headers["auth-token"];
    const userByToken = await getUserByToken(token);
    const userId = userByToken._id.toString();

    try {
        const user = await User.findOne({ _id: userId });

        // Monta array com os caminhos das imagens
        let photos = [];
        if (files && files.length > 0) {
            files.forEach((photo, i) => {
                photos[i] = photo.path;
            });
        }

        // Criação do objeto Party
        const party = new Party({
            title,
            description,
            partyDate,
            photos,
            privacy: req.body.privacy,
            userId: user._id.toString()
        });

        const newParty = await party.save();
        return res.status(201).json({ error: null, msg: "Party created successfully", data: newParty });

    } catch (err) {
        return res.status(400).json({ error: "User not found" });
    }
});

/**
 * Retorna todas as festas públicas
 */
router.get("/all", async (req, res) => {
    try {
        const parties = await Party.find({ privacy: false }).sort({ '_id': -1 });
        return res.status(200).json({ error: null, parties });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

/**
 * Retorna todas as festas do usuário autenticado
 */
router.get("/userparties", verifyToken, async (req, res) => {
    try {
        const token = req.headers["auth-token"];
        const userByToken = await getUserByToken(token);
        const userId = userByToken._id.toString();

        const parties = await Party.find({ userId }).sort({ '_id': -1 });
        return res.status(200).json({ error: null, parties });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

/**
 * Retorna uma festa específica do usuário autenticado
 */
router.get("/userparties/:id", verifyToken, async (req, res) => {
    try {
        const token = req.headers["auth-token"];
        const userByToken = await getUserByToken(token);
        const userId = userByToken._id.toString();

        const partyId = req.params.id;
        const party = await Party.findOne({ _id: partyId, userId });

        return res.status(200).json({ error: null, party });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

/**
 * Retorna uma festa pública ou privada
 * - Festas privadas só podem ser acessadas pelo dono
 */
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const partyId = req.params.id;
        const party = await Party.findOne({ _id: partyId });

        // Festa pública
        if (party.privacy === false) {
            return res.status(200).json({ error: null, party });
        }

        // Festa privada: valida se o usuário é o dono
        const token = req.headers["auth-token"];
        const user = await getUserByToken(token);

        if (user._id.toString() !== party.userId.toString()) {
            return res.status(401).json({ error: "Access denied" });
        }

        return res.status(200).json({ error: null, party });

    } catch (err) {
        return res.status(400).json({ error: "Party do not exist" });
    }
});

/**
 * Exclusão de uma festa
 * - Apenas o dono pode excluir
 */
router.delete("/", verifyToken, async (req, res) => {
    try {
        const token = req.headers["auth-token"];
        const user = await getUserByToken(token);

        const partyId = req.body.id;
        const userId = user._id.toString();

        if (!partyId) {
            return res.status(400).json({ error: "Party ID is required" });
        }

        const party = await Party.findOne({ _id: partyId, userId });
        if (!party) {
            return res.status(404).json({ error: "Party not found" });
        }

        await Party.deleteOne({ _id: partyId, userId });
        return res.status(200).json({ error: null, msg: "Party deleted successfully" });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

/**
 * Atualização de uma festa
 * - Apenas o dono pode editar
 * - Permite atualização de imagens
 */
router.put("/", verifyToken, upload.fields([{ name: "photos" }]), async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const partyDate = req.body.party_date;
    const partyId = req.body.id;
    const partyUserId = req.body.userId;

    let files = [];
    if (req.files) {
        files = req.files.photos;
    }

    // Validação básica
    if (!title || title.trim() === "" || description.trim() === "" || !partyDate || partyDate.trim() === "") {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Valida se o usuário autenticado é o dono da festa
    const token = req.headers["auth-token"];
    const userByToken = await getUserByToken(token);
    const userId = userByToken._id.toString();

    if (userId !== partyUserId) {
        return res.status(401).json({ error: "Access denied" });
    }

    // Objeto base para atualização
    let party = {
        id: partyId,
        title,
        description,
        partyDate,
        privacy: req.body.privacy,
        userId
    };

    // Atualiza fotos se novas forem enviadas
    if (files && files.length > 0) {
        let photos = [];
        files.forEach((photo, i) => {
            photos[i] = photo.path;
        });
        party.photos = photos;
    }

    try {
        const updatedParty = await Party.findOneAndUpdate(
            { _id: partyId, userId },
            party,
            { new: true }
        );

        return res.status(200).json({ error: null, msg: "Party updated successfully", data: updatedParty });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

module.exports = router;
