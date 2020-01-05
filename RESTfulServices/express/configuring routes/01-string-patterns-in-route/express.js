var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Match abcd, abbcd, abbbcd and so on.
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
});

//Match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd')
});

//Match /abe /abcde
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
})

var server = app.listen(5000, function() {
    console.log('Node server is running on port 5000');
});