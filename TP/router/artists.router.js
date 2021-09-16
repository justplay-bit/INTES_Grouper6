const express = require("express");
const ArtistRouter = express.Router();
const ChansonController = require("../controller/chanson.controller");

// Begin Router
ArtistRouter
    .route("/")
    .get(ChansonController.findByGroup)

// end Router
module.exports = ArtistRouter;
