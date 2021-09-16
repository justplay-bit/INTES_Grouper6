const express = require("express");
const router = express.Router();
const ChansonRouter = require("./chansons.router");
const ArtistRouter = require("./artists.router");
const API_CHANSONS = `/songs`;
const API_ARTISTS = `/artists`;

router.use(API_CHANSONS, ChansonRouter);
router.use(API_ARTISTS,ArtistRouter);

module.exports = router;
