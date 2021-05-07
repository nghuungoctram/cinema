'use strict'

const UserService = require('../service/UserService');

class UserController {
    static async create(req, res, next) {
        try {
            let data = await UserService.CreateService(req);
            res.status(200).json({
                status: "Ok from create usercontroller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail from create usercontroller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }

    static async login(req, res, next) {
        try {
            let data = await UserService.LoginService(req);
            res.status(200).json({
                status: "Ok from login usercontroller",
                error: null,
                data: {
                    result: data,
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail from login usercontroller ",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }

    static async ForgotPasswordController(req, res, next) {
        try {
            await UserService.ForgotPasswordService(req);
            res.status(200).json({
                status: " Forgot Ok from controller!",
                erorr: null
            });
        } catch (e) {
            res.status(200).json({
                status: "Forgot fail from controller!",
                error: {
                    code: 1000,
                    message: "Server Error"
                },
                data: null
            });
        }
    }

    static async ResetPasswordController(req, res, next) {
        try {
            await UserService.ResetPasswordService(req);
            res.status(200).json({
                status: " Reset Ok from controller!",
                erorr: null
            });
        } catch (e) {
            res.status(200).json({
                status: "Reset fail from controller!",
                error: {
                    code: 1000,
                    message: "Server Error"
                },
                data: null
            });
        }
    }

    static async UploadController(req, res, next) {
        try {
            await UserService.UploadService(req);
            res.status(200).json({
                status: " Upload Ok from controller!",
                erorr: null
            });
        } catch (e) {
            res.status(200).json({
                status: "Upload fail from controller!",
                error: {
                    code: 1000,
                    message: "Server Error"
                },
                data: null
            });
        }
    }
}

module.exports = UserController;