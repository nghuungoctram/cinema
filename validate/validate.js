// const { body, validationResult } = require('express-validator');
const express = require('express')
const { body } = require('express-validator');

// // const UserService = require("../service/UserService")

// module.exports = async function (req, res, next) {

//     let checkEmail = req.body.Email;
//     console.log(checkEmail);
//     validate(checkEmail)
//         // // To delete leading and triling space
//         // .trim()

//         // // Normalizing the email address
//         // .normalizeEmail()

//         // // Checking if follow the email
//         // // address formet or not
//         // .isEmail()

//         // // Custom message
//         // .withMessage('Invalid email')

//         // // Custom validation
//         // // Validate email in use or not
//         .custom(async (checkEmail) => {
//             const existingUser =
//                 await getOneBy({ checkEmail })

//             if (existingUser) {
//                 throw new Error('Email already in use')
//             }
//         })
// }


module.exports = async function (req, res, next) {
    body('Email').custom((value, { req }) => {
        if (value !== req.body.Email) {
            throw new Error('wrong');
        }

        // Indicates the success of this synchronous custom validator
        return false;
    }),
        (req, res) => {
            UserController.create
        }
}