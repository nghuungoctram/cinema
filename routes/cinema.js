const express = require("express");
const router = express.Router();
const CinemaController = require("../controller/CinemaController");

//postmethod
router.get('/', CinemaController.list);

module.exports = router;