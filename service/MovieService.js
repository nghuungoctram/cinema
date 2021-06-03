'use strict'

const queryBuilder = require("../config/database");
const uuid = require('uuid');
const base64 = require('base-64'),
    utf8 = require('utf8');

class MovieService {
    static async createMovieAdminService(req) {
        try {
            let param = req.body,
                CinemaIdEncode = param.CinemaId,
                utf8Encode = utf8.encode(CinemaIdEncode);
            let dataInsert = {
                MovieId: uuid.v4(),
                Moviename: param.Moviename,
                Actor: param.Actor,
                Type: param.Type,
                RunningTime: param.RunningTime,
                StartDate: param.StartDate, //YYYY-MM-DD
                EndDate: param.EndDate,
                CinemaId: base64.encode(utf8Encode),
            }
            await queryBuilder('movie').insert(dataInsert);
            console.log("create new movie successfull! ", dataInsert)
            return "Create new movie successfull ";
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = MovieService;