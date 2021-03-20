const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const auth = require("../midleware/auth")

router.post('/create', auth, UserController.create);
router.post('/login', UserController.login);

module.exports = router;