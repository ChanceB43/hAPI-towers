const { truncate } = require("fs");
const mongoose = require("mongoose");

const towerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    health: Number
})

const Towers = mongoose.model("Towers", towerSchema);

module.exports = Towers