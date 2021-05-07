const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const AuthMiddleware = require("../midleware/AuthMiddleware")

router.post('/create', AuthMiddleware, UserController.create);
router.post('/login', UserController.login);

//change password
router.post('/forgotpassword', UserController.ForgotPasswordController);
router.post('/resetpassword', UserController.ResetPasswordController);

// //change avatar user 
router.post('/addavatar', UserController.UploadController);

module.exports = router;
