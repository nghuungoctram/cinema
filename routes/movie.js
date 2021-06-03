const express = require('express');
const router = express.Router();
const MovieController = require("../controller/MovieController")

router.post('/createmovieadmin', MovieController.createMovieAdminController)

router.get('/movieadmin', MovieController.MovieAdminController)

module.exports = router;