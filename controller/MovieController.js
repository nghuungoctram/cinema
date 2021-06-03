'use strict'

const MovieService = require("../service/MovieService");

class FilmController {
    static async createMovieAdminController(req, res, next) {
        try {
            let data = await MovieService.createMovieAdminService(req);
            res.status(200).json({
                status: "Success Ok from Create movie controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "Fail from Create movie controller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }

    static async MovieAdminController(req, res, next) {
        try {
            let data = await MovieService.MovieAdminService(req);
            res.status(200).json({
                status: "Success Ok from movie controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "Fail from movie controller",
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