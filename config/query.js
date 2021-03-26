var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "19121999",
    database: "movie"
})

//check connection
// connect.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

//create new table
// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = "CREATE TABLE movie_type (MovieId varchar(255) NOT NULL, MovieName varchar(255) DEFAULT NULL, PRIMARY KEY (MovieId))";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
//     })
// });

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = "CREATE TABLE cinema (CinemaId varchar(255) NOT NULL, CinemaName varchar(255) DEFAULT NULL, City varchar(255) DEFAULT NULL,Country varchar(255) DEFAULT NULL, PRIMARY KEY (CinemaId))";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
//     })
// });

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = "CREATE TABLE user (UserId varchar(255) NOT NULL, Username varchar(255) DEFAULT NULL, Password varchar(255) DEFAULT NULL, Address varchar(255) DEFAULT NULL, City varchar(255) DEFAULT NULL, Country varchar(255) DEFAULT NULL, Phone varchar(255) DEFAULT NULL,PRIMARY KEY (UserId))";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
//     })
// });

// insert databases into table
// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " INSERT INTO movie_type  (MovieId, MovieName) VALUES ('001', 'Bo gia'), ('002', 'Gai gia lam chieu'),('003', 'The shark'),('004', 'King Kong') ";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " INSERT INTO cinema  (CinemaId, CinemaName, City, Country) VALUES ('GGM', 'Gigamall', 'HCM', 'VN'), ('RY', 'Royal City', 'HN', 'VN')";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " INSERT INTO user (UserId, Username , Password , Address , City , Country , Phone ) VALUES ('0001', 'Tram Nguyen', '19121999', '237 Bach Dang', 'HCM', 'VN', '0906264195')";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

//delete all data in table name
// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " DELETE FROM user";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Delete successful")
//     })
// });


