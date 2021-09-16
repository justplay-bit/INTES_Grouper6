const express = require("express");
const chansonRouter = express.Router();
const ChansonController = require("../controller/chanson.controller");
const { validate } = require("express-validation");
const ChansonValidator = require("../validator/chanson.validator");

const API_CHANSONS_PARAM = `/:id`;
const API_CHANSONS_QUERY = `/artists`;

// Begin Router
chansonRouter
    .route("/")
    .get(ChansonController.findAll)
    .post(validate(ChansonValidator.validateCreate), ChansonController.create);

chansonRouter.route(API_CHANSONS_QUERY).get(ChansonController.findByArtist);

chansonRouter
    .route(API_CHANSONS_PARAM)
    .get(ChansonController.findById)
    .put(validate(ChansonValidator.validateUpdate), ChansonController.update)
    .delete(ChansonController.delete);

// end Router
module.exports = chansonRouter;
