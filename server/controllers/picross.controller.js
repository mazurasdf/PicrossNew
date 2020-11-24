const Picross = require('../models/picross.model');

module.exports.findAllPicrosss = (req,res) => {
    Picross.find()
        .then(allPicrosss => res.json({picrosss: allPicrosss}))
        .catch(err => res.json({message: "beep beep whizz whirrrrrrr it broke fam", error: err}));
};

module.exports.findSinglePicross = (req,res) => {
    console.log(`getting id: ${req.params._id}`);
    Picross.findOne({_id: req.params._id})
        .then(singlePicross => res.json({picross: singlePicross}))
        .catch(err => res.json({message: "beep beep whizz whirrrrrrr it broke fam", error: err}));
}

module.exports.createPicross = (req,res) => {
    console.log("trying to create");
    Picross.create(req.body)
        .then(newPicross => res.json({picross: newPicross}))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePicross = (req,res) => {
    Picross.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updatedPicross => res.json({picross: updatedPicross}))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePicross = (req,res) => {
    Picross.deleteOne({_id: req.params._id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "beep beep whizz whirrrrrrr it broke fam", error: err}));
};