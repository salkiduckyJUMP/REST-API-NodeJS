var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//home.pug

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'user',
    database: 'mydb'
})

connection.connect(function (err) {
    if (err) throw err;
    else
    
})