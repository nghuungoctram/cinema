' use strict'

const queryBuilder = require('../config/database');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "BoxinhDep";
const cloudBackend = require('appdrag-cloudbackend');
let nodemailer = require('nodemailer');

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
                Email = param.Email,
                Password = param.Password,
                user = await queryBuilder('user').where('Email', Email).first();

            if (!user || !bcryptjs.compareSync(Password, user.Password)) {
                return " Please check your Email and password ";
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
                emailCheck = await queryBuilder('user').where('Email', Email).first();

            if (emailCheck) {
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'bonguyen1219@gmail.com', // mail của ai người đó sài
                        pass: '195ngoctram1912.'
                    }
                });

                let mailOptions = {
                    from: 'bonguyen1219@gmail.com',
                    to: Email,
                    subject: '[ABC Cinema] Please reset your password',
                    text: 'ABC Cinema password reset'
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Info Email sent:   ' + info.response);
                    }
                    return 'Info Email sent:   ' + info.response;
                });
            } else {
                return "Your email doesnt exits";
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
                ChangePassword = param.ChangePassword,
                passwordCheck = await queryBuilder('user').where('Password', Password).first();

            if (passwordCheck) {
                if (ChangePassword.length >= 10 && ChangePassword.length <= 15) {
                    await queryBuilder('user').where('Password', Password).update('Password', ChangePassword);
                    console.log("Password has changed! =>>>", ChangePassword)
                    return "Password has changed!";
                } else {
                    console.log('New password at least 10 characters and at most 15 characters');
                    return 'New password at least 10 characters and at most 15 characters';
                }
            } else {
                console.log('Password doesnt match');
                return 'Password doesnt match';
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    static async UploadService(req, res) {
        try {
            let param = req.body;
            Email = param.Email;
            emailCheck = await queryBuilder('user').where('Email', Email).first();
            if (!req.files) {
                return res.status(400).send('No files were uploaded.');
            }
            else if (emailCheck) {
                let file = req.files.upload_image,
                    Imgname = file.name;
                if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
                    file.mv('public/images/upload_images/' + file.name, async function (err) {
                        let dataInsert = {
                            Imgname: Imgname
                        }
                        await queryBuilder('user').where('Email', Email).update(dataInsert);

                        console.log("Upload ok from service! ", dataInsert);
                        return "Upload ok from service!", file;
                    });

                } else {
                    return "This format is not allowed , please upload file with '.png','.gif','.jpg'";
                }
            }
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = UserService;