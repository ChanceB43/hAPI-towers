const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    money: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User