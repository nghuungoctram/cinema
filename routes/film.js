const express = require('express');
const router = express.Router();
const FilmController = require("../controller/FilmController")

router.get('/', FilmController.list)

module.exports = router;