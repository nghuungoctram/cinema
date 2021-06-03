'use strict'

const connect = require("../config/query");

class MovieManageService {
    static async CreateMovieManageDetailsService(req) {
        try {
            connect.connect(function (err) {
                if (err) throw err;
                let sql = "SELECT movie.Moviename, movie.MovieId, movie.CinemaId, cinema.Cinemaname From movie INNER JOIN cinema ON movie.CinemaId = cinema.CinemaId ";
                connect.query(sql, (error, result) => {
                    if (error) throw error;
                    console.log(result)
                })
            });
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async MovieAdminDetailsService(req) {
        try {
            let data = await queryBuilder(movie).orderBy('MovieId', DESC).select().first();
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = MovieManageService;