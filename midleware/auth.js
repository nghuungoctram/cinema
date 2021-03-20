const queryBuilder = require("../config/database")
const uuid = require("uuid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "BoxinhDep";

module.exports = async function (req, res, next) {
    try {
        let token = req.header('Authorization').replace('Bearer ', ''),
            checkToken = jwt.verify(token, JWT_SECRET_KEY),
            user = await queryBuilder('user').where('UserId', checkToken.UserId).first();
        if (!checkToken || !user) {
            res.status(200).json("Access Denied 1")
        } else {
            req.userLogin = user;
            next();
        }
    } catch (e) {
        console.log(e)
        res.status(200).json("Access Denied 2")
    }
}
