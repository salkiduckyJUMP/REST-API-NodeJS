var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
})

connection.connect(function(err) {
    if (err) throw err;
    else
    console.log("Connected to mySQL")
});


app.get('/tasks', (req, res) => {
    connection.query("Select * from tasks", function (err, data) {
        if (err) throw err;
        else {
            console.log(res);
            res.send(data);
        }
    });
});

app.listen(5000);
console.log("Server is listening to port 5000");