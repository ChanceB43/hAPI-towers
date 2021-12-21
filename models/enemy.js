const mongoose = require("mongoose");

const enemySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    health: Number
})

const Enemy = mongoose.model("Enemy", enemySchema);

module.exports = Enemy