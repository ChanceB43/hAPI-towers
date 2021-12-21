const mongoose = require('mongoose');
const Towers = require("./models/towers");
const Enemy = require("./models/enemy");
const User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/hapiTowers', {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!")
        console.log(err)
    });

/////////////////////////////TOWER SEEDS///////////////////////////////

const seedTowers = [
    {
        name: "Archer",
        rank: "private",
        health: 200
    }
]


////////////////////////////ENEMY SEEDS////////////////////////////////

const seedEnemy = [
    {
        name: "Sauron",
        rank: "Grand Magus",
        speed: "Slow",
        health: 150
    }
]

////////////////////////////USER SEEDS////////////////////////////////

const seedUser = [
    {
        name: "Sam",
        color: "Red",
        money: 300
    }
]