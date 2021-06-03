const express = require('express');
const router = express.Router();
const MovieManageController = require("../controller/MovieManageController")

router.post('/moviemanage', MovieManageController.createMovieManageDetailsController)

router.get('/moviemanage', MovieManageController.MovieManageDetailsController)

module.exports = router;