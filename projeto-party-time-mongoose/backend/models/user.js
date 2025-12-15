const mongoose = require("mongoose");

// Schema responsável por representar um usuário no MongoDB
const userSchema = new mongoose.Schema({

  // Nome do usuário
  name: {
    type: String,
    required: true,
  },

  // Email utilizado para login (único por usuário)
  email: {
    type: String,
    required: true,
  },

  // Senha do usuário (armazenada de forma criptografada)
  password: {
    type: String,
    required: true,
  }
});

// Cria o model User a partir do schema
const User = mongoose.model("User", userSchema);

module.exports = User;
