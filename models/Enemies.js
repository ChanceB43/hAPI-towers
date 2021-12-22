const { truncate } = require("fs"); //What's this?
const mongoose = require("mongoose");

const enemySchema = new mongoose.Schema({
    name: String,
    img: String,
    rank: String,
    maxHealth: Number,
    speed: Number,
    power: Number,

})

const Enemies = mongoose.model("Enemies", enemySchema);

module.exports = Enemies;