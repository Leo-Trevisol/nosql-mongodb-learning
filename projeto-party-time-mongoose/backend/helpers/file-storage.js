const multer = require("multer");
const path = require("path");

// Configuração de armazenamento de arquivos usando o multer
const diskStorage = multer.diskStorage({

    // Define o diretório onde as imagens serão salvas
    destination: (req, file, cb) => {
        cb(null, 'public/imgs/');
    },

    // Gera um nome único para o arquivo usando timestamp + extensão original
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

module.exports = diskStorage;
