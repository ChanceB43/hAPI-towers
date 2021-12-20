const express = require("express");
const app = express()

app.use((req, res) => {
    console.log("NEW REQUEST COMING THROUGH!")
    res.send("HI, REQUEST RECIEVED! THIS IS THE RESPONSE")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})