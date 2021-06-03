const express = require("express");
const router = express.Router();
const CinemaController = require("../controller/CinemaController");

//postmethod
router.post('/cinemadetails', CinemaController.CinemaDetailsController)

router.get('/cinemainfo', CinemaController.CinemaInfoController)


module.exports = router;