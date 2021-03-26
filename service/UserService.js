' use strict'

const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "BoxinhDep";

class UserService {
    static async CreateService(req, res) {
        try {
            let param = req.body;
            let dataInsert = {
                UserId: uuid.v4(),
                Username: param.Username,
                Password: bcryptjs.hashSync(param.Password, 10)
            }
            // console.log(dataInsert.UserId);
            await queryBuilder('user').insert(dataInsert);
            // jwt.sign(dataInsert, JWT_SECRET_KEY);
            console.log("create new user successfull! ", dataInsert)
            return "Create new user successfull ";
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async LoginService(req) {
        try {
            let param = req.body,
                Username = param.Username,
                Password = param.Password,
                user = await queryBuilder('user').where('Username', Username).first();

            if (!user || !bcryptjs.compareSync(Password, user.Password)) {
                return " Please check your username and password ";
            } else {
                let token = jwt.sign({ UserId: user.UserId }, JWT_SECRET_KEY, { expiresIn: "1h" });
                console.log("Login succesfull! with:", token);
                return " Login successfull with token:" + token;
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = UserService;