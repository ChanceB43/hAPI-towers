const express = require("express");
const app = express();
const path = require("path");
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


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const towers = await Towers.find({})
    console.log(towers)
    res.send("ALL hAPI TOWERS HERE!")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})