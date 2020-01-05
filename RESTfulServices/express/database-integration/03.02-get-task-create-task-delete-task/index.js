var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

//Show only one task
app.get('/tasks/:id', (req, res) => {
    connection.query("Select task from tasks where id = ? ", req.params.id, function (err, data) {
        if (err) throw err;
        else {
            console.log(data);
            res.send(data);
        }
    });
})

//Create a new task
app.post('/tasks/addtask', (req, res) => {
    connection.query("Insert into tasks (task, status) values(?, ?)", [req.body.task, req.body.status], function (err, data) {
        if (err) throw err;
        else {
            console.log(data);
            res.send(200, data.insertid);
        }
    });
})

//Delete a task
app.delete('/tasks/:id', (req, res) => {
    connection.query("Delete from tasks where id = ? ", req.params.id, function (err, data) {
        if (err) throw err;
        else {
            console.log(data);
            res.send(200, "Task was deleted!");
            //res.send(200, data);
        }
    });
})

app.listen(5000);
console.log("Server is listening to port 5000");