const { truncate } = require("fs");
const mongoose = require("mongoose");

const towerSchema = new mongoose.Schema({
    name: String,
    img: String,
    rank: String,
    power: Number,
    powerSpeed: Number,
})

const Towers = mongoose.model("Towers", towerSchema);

module.exports = Towers