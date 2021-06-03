const express = require("express"),
    router = express.Router(),
    UserController = require("../controller/UserController"),
    AuthMiddleware = require("../midleware/AuthMiddleware");

router.post('/create', UserController.create);

router.post('/info', AuthMiddleware, UserController.InfoController);
router.get('/info', AuthMiddleware, UserController.InfoController);

router.post('/login', UserController.login);

//change password
router.post('/forgotpassword', UserController.ForgotPasswordController);

router.put('/resetpassword', UserController.ResetPasswordController);

// //change avatar user 
router.post('/addavatar', UserController.UploadController);

module.exports = router;
