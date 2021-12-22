const mongoose = require('mongoose');
const dbName = 'hAPITowers';

const mongoURI =
    process.env.NODE_ENV === 'production'
    ? process.env.DB.urlencoded
    : "mongodb://localhose/" + dbName;

mongoose
    .connect(mongoURI)
    .then((instance) =>
        console.log("I'm connected to DB: " + instance.connections[0])
    )
    .catch((err) => console.log("My connection failed: ", err));

module.exports = mongoose;

// mongoose.connect('mongodb://localhost:27017/hapiTowers', {
//      useNewUrlParser: true, 
//      useUnifiedTopology: true 
// })
//     .then(() => {
//         console.log("MONGO CONNECTION OPEN!")
//     })
//     .catch(err => {
//         console.log("OH NO MONGO CONNECTION ERROR!")
//         console.log(err)
//     });