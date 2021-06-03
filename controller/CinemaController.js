'use strict'

const CinemaService = require("../service/CinemaService")

class CinemaController {
    static async CinemaDetailsController(req, res, next) {
        try {
            let data = await CinemaService.CinemaDetailsService(req);
            res.status(200).json({
                status: " OK from cinema Details Controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail from cinema Details Controller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }

    static async CinemaInfoController(req, res, next) {
        try {
            let data = await CinemaService.CinemaInfoService(req);
            res.status(200).json({
                status: " OK from cinema Info Controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: " Fail from cinema Info Controller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }
}

module.exports = CinemaController;