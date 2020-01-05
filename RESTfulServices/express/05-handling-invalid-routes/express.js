var express = require('express');
var path = require("path");
var app = express();

//define routes here

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', function(req, res) {
    res.send('The ID you specified is ' + req.query.name + " " + req.query.location);
});

app.get('/users/:id([0-9]{5})', function(req, res) {
    res.send('id: ' + req.params.id);
    console.log("in regex");
})

//http://localhost:5000/users/54321/

app.get('users/:id', function(req, res) {
    res.send('The ID you specified is ' + req.params.id);
    console.log("in non-regex");
});

app.get('*', function(req, res) {
    res.send('Sorry this is an invalid url');
});

var server = app.listen(5000, function () {
    console.log('Node server is running on port 5000...');
});


//http://localhost:5000/hello.txt
//http://localhost:5000/js/app.js
//http://localhost:5000/css/style.css