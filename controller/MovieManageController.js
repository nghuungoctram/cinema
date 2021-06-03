'use strict'

const MovieManageService = require("../service/MovieManageService");

class MovieManageController {
    static async createMovieManageDetailsController(req, res, next) {
        try {
            let data = await MovieManageService.CreateMovieManageDetailsService(req);
            res.status(200).json({
                status: "Success Ok from create manage movie controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "Fail from create manage movie controller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }

    static async MovieManageDetailsController(req, res, next) {
        try {
            let data = await MovieManageService.MovieManageDetailsService(req);
            res.status(200).json({
                status: "Success Ok from manage movie controller",
                error: null,
                data: {
                    result: data
                }
            });
        } catch (e) {
            res.status(200).json({
                status: "Fail from manage movie controller",
                error: {
                    code: 1000,
                    message: " Server Error"
                },
                data: null
            });
        }
    }
}

module.exports = MovieManageController;