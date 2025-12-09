const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
  title: {
    type: String,   
    required: true,
    },
    description : {
    type: String,
    required: true,
    },
    partyDate: {
    type: Date,
    required: true, 
    },
    photos : {
        type : Array,
        required: false,
    },
    privacy : {
        type : Boolean
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId
    }
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;