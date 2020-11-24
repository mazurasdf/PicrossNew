//TODO replace "Picross" with name of your model. add details on line 6
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicrossSchema = new mongoose.Schema({
    //details go in here
});

const Picross = mongoose.model("Picross", PicrossSchema);

module.exports = Picross;