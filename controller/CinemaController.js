'use strict'

const CinemaService = require("../service/CinemaService")

class CinemaController {
    static async list(req, res, next) {
        try {
            let data = await CinemaService.getList(req);
            res.status(200).json({
                status: " OK ",
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

module.exports = CinemaController;