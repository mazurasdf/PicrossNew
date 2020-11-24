const PicrossController = require("../controllers/picross.controller");

module.exports = app => {
    app.get("/api/picross", PicrossController.findAllPicross);
    app.get("/api/picross/:_id", PicrossController.findSinglePicross);
    app.post("/api/picross/new", PicrossController.createPicross);
    app.put("/api/picross/update/:_id", PicrossController.updatePicross);
    app.delete("/api/picross/delete/:_id", PicrossController.deletePicross);
}