const express = require('express');

let app = express(),
    fileUpload = require('express-fileupload'),
    path = require('path'),
    db = require('./config/query');

let filmRouter = require('./routes/film');
let cinemaRouter = require('./routes/cinema');
let userRouter = require('./routes/user');
// let imgRouter = require('./routes/img');

// all evironemtn
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: " Success ok",
        error: null,
        data: {
            result: " Login successfull "
        }
    });
});

// query connection
db.query;

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