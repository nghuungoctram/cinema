'use strict'

const queryBuilder = require("../config/database");
const base64 = require('base-64'),
    utf8 = require('utf8');

class CinemaService {
    static async CinemaDetailsService(req) {
        try {
            let param = req.body,
                CinemaIdEncode = param.CinemaId,
                utf8Encode = utf8.encode(CinemaIdEncode);
            let dataInsert = {
                CinemaId: base64.encode(utf8Encode),
                Cinemaname: param.Cinemaname,
                WorkingTime: param.WorkingTime,
                City: param.City,
                Address: param.Address
            }
            await queryBuilder('cinema').insert(dataInsert);
            console.log("cinema detials: ", dataInsert)
            return "cinema details";
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async CinemaInfoService(req) {
        try {
            let data = await queryBuilder(cinema).orderBy('CinemaId', DESC).select().first();
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = CinemaService;