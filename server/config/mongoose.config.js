const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/picross_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("beep boop bop, db connection was a flop", err));