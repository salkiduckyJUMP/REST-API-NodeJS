var express = require('express');
var path = require("path");
var app = express();

//define routes here

app.use(express.static(path.join(__dirname, 'public')));

// req.query.key will get you the key's value
app.get('/users', function(req, res) {
    res.send('The ID you specified is ' + req.query.name + " " + req.query.location);
});

// :id variable becomes a path parameter!!
app.get('users/:id', function(req, res) {
    res.send('The ID you specified is ' + req.params.id);
});

//You pass in the value of each key into the url after a ?

// EXAMPLE:
// http://localhost:5000/users/?name=Salki&location=NJ

var server = app.listen(5000, function () {
    console.log('Node server is running on port 5000...');
});


//http://localhost:5000/hello.txt
//http://localhost:5000/js/app.js
//http://localhost:5000/css/style.css