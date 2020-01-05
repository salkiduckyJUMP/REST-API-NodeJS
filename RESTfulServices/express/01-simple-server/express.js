//These lines will always be at the top when working with Express!
var express = require('express');
var app = express();

//Define routes here!

var server = app.listen(5000, function () {
    console.log('Node server is running on port 5000...');
});