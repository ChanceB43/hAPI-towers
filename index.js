const express = require("express");
const app = express();
const cors = ('cors')

aoo.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const path = require("path");


/* Controllers */
const towersController = require('./controller/towers');

const enemiesController = require('./controller/enemies');
/* End Controllers */


// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.get("/towers", (req, res) => {
//     res.send("hAPI TOWERS!")
// })

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port') , () => {
    console.log("LISTENING ON PORT 3000")
})