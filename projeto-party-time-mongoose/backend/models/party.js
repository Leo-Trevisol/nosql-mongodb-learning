const mongoose = require("mongoose");

// Schema responsável por representar uma festa/evento no MongoDB
const partySchema = new mongoose.Schema({

  // Título da festa
  title: {
    type: String,
    required: true,
  },

  // Descrição do evento
  description: {
    type: String,
    required: true,
  },

  // Data em que a festa acontece
  partyDate: {
    type: Date,
    required: true,
  },

  // Lista de imagens associadas à festa
  photos: {
    type: Array,
    required: false,
  },

  // Define se o evento é privado ou público
  privacy: {
    type: Boolean,
  },

  // Referência ao usuário que criou a festa
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  }
});

// Cria o model Party a partir do schema
const Party = mongoose.model("Party", partySchema);

module.exports = Party;
