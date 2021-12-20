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

    const t = new Towers({
        name: "Archer",
        health: 100,
        rank: "private"
    })
    t.save()
        .then(t => {
            console.log(t)
    })
        .catch(e => {
            console.log(e)
        });