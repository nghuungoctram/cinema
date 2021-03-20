'use strict'

const UserService = require('../service/UserService');

class UserController {
    static async create(req, res, next) {
        try {
            let data = await UserService.CreateService(req);
            res.status(200).json({
                status: "Ok",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail ",
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
                status: "Ok",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail ",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }
}

module.exports = UserController;