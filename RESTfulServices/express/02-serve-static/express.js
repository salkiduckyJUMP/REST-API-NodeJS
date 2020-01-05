var express = require('express');
var path = require("path");
var app = express();

//define routes here

//Static file middleware; it's doing the work to get those files
app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(5000, function () {
    console.log('Node server is running on port 5000...');
});

//Files in the public folder are processed

//http://localhost:5000/hello.txt
//http://localhost:5000/js/app.js
//http://localhost:5000/css/style.css