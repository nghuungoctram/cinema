const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let filmRouter = require('./routes/film');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.use("*", (req, res, next) => {
    res.status(404).json({
        status: " Success ok",
        error: {
            code: 404,
            message: " API fail! Not Found!"
        },
        data: null
    });
})

module.exports = app;