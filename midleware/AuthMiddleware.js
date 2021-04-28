const queryBuilder = require("../config/database")
const uuid = require("uuid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "BoxinhDep";

module.exports = async function (req, res, next) {
    try {
        let token = req.headers['authorization'];
        if (token) {
            let header = token.replace('Bearer ', '');
            console.log("header la:", header)
            let checkToken = jwt.verify(header, JWT_SECRET_KEY);
            console.log("token la:", checkToken);
            let user = await queryBuilder('user').where('UserId', checkToken.UserId).first();
            console.log("user la:", user);
            if (!checkToken || !user) {
                // if (user !== checkToken) {
                res.status(200).json("Unauthorized")
            } else {
                req.userLogin = user;
                res.status(200).json("tai khoan da duoc dang ki");
                // res.status(200).json(req.userLogin);
                console.log("tai khoan da duoc dang ki")
                next();
            }
        } else {
            res.status(200).json("No token provided");
        }
    } catch (e) {
        res.status(403).json("Access denied")
    }
}
