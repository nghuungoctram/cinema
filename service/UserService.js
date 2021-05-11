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
                Password = param.Password,
                emailCheck = await queryBuilder('user').where('Email', Email),
                passwordCheck = await queryBuilder('user').where('Password', Password);

            if (emailCheck === Email) {
                if (Pass === passwordCheck) {
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
                    });
                    return res.status(200).json('Email Founded!')
                } else {
                    return res.status(400).json('Wrong password. Try again or click ‘Forgot password’ to reset it')
                }
            } else {
                return 'Your email doesnt exits';
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
                        // var sql = "INSERT INTO `users_image`(`image`) VALUES ( '" + img_name + "')";

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

    static async profile(req, res) {
        var message = '';
        var id = req.params.id;
        var sql = "SELECT * FROM `users_image` WHERE `id`='" + id + "'";
        db.query(sql, function (err, result) {
            if (result.length <= 0)
                message = "Profile not found!";

            res.render('profile.ejs', { data: result, message: message });
        });
    };
}

module.exports = UserService;