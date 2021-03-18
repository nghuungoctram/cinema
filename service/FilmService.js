'use strict'

const queryBuilder = require("../config/database");

// const queryBuilder = require("../config/query");

class FilmService {
    static async getList(req) {
        try {
            let data = await queryBuilder('type').orderBy('id', 'DESC').select().limit(2);
            return data;
        } catch (e) {

        }
    }
}

module.exports = FilmService;