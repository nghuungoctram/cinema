'use strict'

const FilmService = require("../service/FilmService");

class FilmController {
    static async list(req, res, next) {
        try {
            let data = await FilmService.getList(req);
            res.status(200).json({
                status: "Success Ok",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "Fail",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }
}

module.exports = FilmController;