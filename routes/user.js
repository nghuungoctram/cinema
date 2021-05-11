const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const AuthMiddleware = require("../midleware/AuthMiddleware");
const UserService = require("../service/UserService");

router.post('/create', UserController.create);
router.post('/login', UserController.login);

//change password
router.post('/forgotpassword', UserController.ForgotPasswordController);
router.post('/resetpassword', UserController.ResetPasswordController);

// //change avatar user 
router.post('/addavatar', UserController.UploadController);
router.get('/addavatar', UserController.UploadController);

module.exports = router;
