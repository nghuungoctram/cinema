const queryBuilder = require("../config/database")
const uuid = require("uuid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "BoxinhDep";

module.exports = async function (req, res, next) {
    try {
        let token = req.headers['authorization'];
        console.log(token)
        if (token) {
            let header = token.replace('Bearer ', '');
            //console
            console.log("HEADER: " + header);

            let checkToken = jwt.verify(header, JWT_SECRET_KEY);
            console.log("CHECK TOKEN:" + checkToken);

            let user = await queryBuilder('user').where('UserId', checkToken.UserId).first();
            // console.log("user:", user);

            if (!checkToken || !user) {
                res.status(200).json("Access Denied 1")
            } else {
                req.userLogin = user;
                console.log("vo toi roi ne", req.userLogin)
                next();
            }
        } else {
            res.status(200).json("Access Denied 2");
        }
    } catch (e) {
        console.log(e);
        res.status(403).json("Access Denied 3")
    }
}