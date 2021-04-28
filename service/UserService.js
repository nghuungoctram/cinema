' use strict'

const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "BoxinhDep";
const cloudBackend = require('appdrag-cloudbackend');

class UserService {
    static async CreateService(req, res) {
        try {
            let param = req.body,
                Username = param.Username,
                Email = param.Email,
                emailCheck = await queryBuilder('user').where('Email', Email).first(),
                userCheck = await queryBuilder('user').where('Username', Username).first()
            if (emailCheck) {
                console.log("your email: '" + Email + "' already in use");
                return "your email: '" + Email + "' already in use";
            } else if (userCheck) {
                console.log("your username: '" + Username + "' already in use");
                return "your username: '" + Username + "' already in use";
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

    static async ForgotPasswordService(req, res) {
        try {
            let param = req.body,
                Email = param.Email,
                Password = param.Password,
                EmailCheck = await queryBuilder('user').where('Email', Email),
                PasswordCheck = await queryBuilder('user').where('Password', Password);
            if (!req.Email) {
                return "Email not be empty";
            } else if (EmailCheck) {
                if (PasswordCheck) {
                    // let checkUsername = " SELECT Username FROM user WHERE Email = Email",
                    let checkUsername = await queryBuilder('user').select(Username).where('Email', Email),
                        checkPassword = " SELECT Password FROM user WHERE Email = Email",
                        formEmail = "Your Forgotten Password",
                        subject = "Hi" + checkUsername + ", your old password is :" + checkPassword;
                    //send email
                    await cloudBackend.sendEmail("Password Administrator", Email, formEmail, subject)
                        .then(function (res) {
                            console.log(res);
                        });
                    return res.status(200).json('Email Founded!')
                } else {
                    return res.status(400).json('Wrong password. Try again or click ‘Forgot password’ to reset it')
                }
            } else {
                return res.status(400).json('Your email doesnt exits')
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async ResetPasswordService(req, res) {
        try {
            let param = req.body,
                Password = param.Password,
                ChangePassword = param.ChangePassword;
            if (!Password) {
                return res.status(400).json('Password not be empty');
            } else {
                if (!ChangePassword) {
                    return res.status(400).json('New password not be empty');
                } else {
                    await queryBuilder('user').update('Password', ChangePassword);
                    console.log("Password has changed! =>>>", ChangePassword)
                    return "Password has changed!";
                }
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async UploadService(req, res) {
        try {
            if (!req.files) {
                return res.status(400).send('No files were uploaded.');
            } else {
                let file = req.files.upload_image,
                    Imgname = file.name;
                if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

                    let dataInsert = {
                        ImgId: uuid.v4(),
                        Imgname: Imgname
                    }
                    await queryBuilder('user').insert(dataInsert);
                    console.log("Upload ok from service! ", dataInsert)
                    return "Upload ok from service!";
                }
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = UserService;