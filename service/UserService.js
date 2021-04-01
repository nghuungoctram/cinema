' use strict'

const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "BoxinhDep";

class UserService {
    static async CreateService(req, res) {
        try {
            let param = req.body,
                Email = param.Email,
                user = await queryBuilder('user').where('Email', Email).first();
            if (user) {
                return " your email aldready in use ";
            } else {
                let dataInsert = {
                    UserId: uuid.v4(),
                    Username: param.Username,
                    Password: bcryptjs.hashSync(param.Password, 10),
                    Email: param.Email
                }
                await queryBuilder('user').insert(dataInsert);
                console.log("create new user successfull! ", dataInsert)
                return "Create new user successfull ";
            }
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
                Email = param.Email,
                user = await queryBuilder('user').where('Username', Username).first();

            if (!user || !bcryptjs.compareSync(Password, user.Password)) {
                return " Please check your username and password ";
            } else {
                let token = jwt.sign({ UserId: user.UserId, Username: user.Username, Email: user.Email }, JWT_SECRET_KEY, { expiresIn: "1h" });
                console.log("Login succesfull with:", token);
                return " Login successfull with token:" + token;
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = UserService;