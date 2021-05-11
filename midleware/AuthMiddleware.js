const queryBuilder = require("../config/database")
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
                res.status(200).json("Unauthorized")
            } else {
                req.userLogin = user;
                res.status(200).json("tai khoan da duoc dang ki");
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