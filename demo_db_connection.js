var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'test',
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // con.query(sql, function(err, result) {
    con.query('SELECT * FROM EMPLOYE WHERE num_service="30"', function(err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        console.log(result);
    });

});