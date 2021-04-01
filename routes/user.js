const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const auth = require("../midleware/auth")
const validate = require("../validate/validate")

router.post('/create', auth, UserController.create);
router.post('/login', UserController.login);
// router.post('/auth', auth);

module.exports = router;
