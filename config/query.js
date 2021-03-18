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
//     let sql = "CREATE TABLE type (id varchar(255) NOT NULL, name varchar(255) DEFAULT NULL)";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
//     })
// });

// insert databases into table
// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " INSERT INTO type  (id, name) VALUES ('19', 'tramxinhdep') ";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

//delete all data in table name
// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " DELETE FROM type";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Delete successful")
//     })
// });


