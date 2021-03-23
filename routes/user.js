const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const auth = require("../midleware/auth")

router.post('/create', auth, UserController.create);
router.post('/login', UserController.login);

// router.post('/create', function (req, res) {
//     res.send("you Id is " + req.body.id + " your password " + req.body.password);
//     res.end();
// });

module.exports = router;