// check connection
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
//     let sql = "CREATE TABLE user (UserId varchar(255) NOT NULL, Username varchar(255) DEFAULT NULL, Password varchar(255) DEFAULT NULL, Email varchar(255) NOT NULL, Address varchar(255) DEFAULT NULL, City varchar(255) DEFAULT NULL, Country varchar(255) DEFAULT NULL, Phone varchar(255) DEFAULT NULL,PRIMARY KEY (UserId))";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log("CREATE SUCCESSFUL")
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


//them cot vao bang
connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " ALTER TABLE images ADD Email varchar(255) NOT NULL";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " ALTER TABLE images DROP COLUMN Email";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

connect.connect(function (err) {
    if (err) throw err;
    let sql = " ALTER TABLE user ADD Imgname varchar(255) DEFAULT NULL";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log(" Insert successful");
    })
});

//movie
connect.connect(function (err) {
    if (err) throw err;
    let sql = "CREATE TABLE movie (MovieId varchar(255) NOT NULL, Moviename varchar(255) DEFAULT NULL, Actor varchar(255) DEFAULT NULL, Type varchar(255) DEFAULT NULL, RunningTime varchar(255) DEFAULT NULL, StartDate varchar(255) DEFAULT NULL, EndDate varchar(255) DEFAULT NULL, Cinemaname varchar(255) DEFAULT NULL, PRIMARY KEY (MovieId))";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log(" Insert successful");
    })
});

// connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " ALTER TABLE movie DROP COLUMN StartDate";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

connect.connect(function (err) {
    if (err) throw err;
    let sql = " ALTER TABLE movie ADD EndDate date DEFAULT NULL";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log(" Insert successful");
    })
});

//cinema
connect.connect(function (err) {
    if (err) throw err;
    let sql = "CREATE TABLE cinema (CinemaId varchar(255) NOT NULL, Cinemaname varchar(255) DEFAULT NULL, Address varchar(255) DEFAULT NULL, City varchar(255) DEFAULT NULL, WorkingTime varchar(255) DEFAULT NULL, PRIMARY KEY (CinemaId))";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log("CREATE SUCCESSFUL")
    })
});

connect.connect(function (err) {
//     if (err) throw err;
//     let sql = " DELETE FROM cinema WHERE CinemaId = 'CinemaThuDucPhamVanDong'";
//     connect.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(" Insert successful");
//     })
// });

connect.connect(function (err) {
    if (err) throw err;
    let sql = "CREATE TABLE moviemanage (CinemaId varchar(255) NOT NULL, MovieId varchar(255) NOT NULL, Cinemaname varchar(255) DEFAULT NULL, Moviename varchar(255) DEFAULT NULL, PRIMARY KEY (CinemaId, MovieId))";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log("CREATE SUCCESSFUL")
    })
});

connect.connect(function (err) {
    if (err) throw err;
    let sql = " CREATE TABLE moviemanage AS SELECT movie.Moviename, movie.MovieId, movie.CinemaId, cinema.Cinemaname From movie INNER JOIN cinema ON movie.CinemaId = cinema.CinemaId";
    connect.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
    })
});