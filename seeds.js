const mongoose = require('mongoose');
const Towers = require("./models/towers");

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

/////////////////////////////Tower Seeds///////////////////////////////

const seedTowers = [
    {
        name: "Archer",
        rank: "private",
        health: 200
    }
]


////////////////////////////Enemy Seeds////////////////////////////////

const seedEnemy = [
    {
        name: "Sauron",
        rank: "Grand Magus",
        speed: "Slow",
        health: 150
    }
]