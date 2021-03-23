const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let filmRouter = require('./routes/film');
let cinemaRouter = require('./routes/cinema')
let userRouter = require('./routes/user')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: " Success ok",
        error: null,
        data: {
            result: " Login successfull "
        }
    });
});

app.use('/film', filmRouter);
app.use('/cinema', cinemaRouter);
app.use('/user', userRouter);

app.use("*", (req, res, next) => {
    res.status(404).json({
        status: " Denied",
        error: {
            code: 404,
            message: " API fail! Not Found!"
        },
        data: null
    });
})

module.exports = app;


