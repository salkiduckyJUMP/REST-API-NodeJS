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

// app.get('/response/append', function (req, res) {
//     res.append('Link', ['<http://localhost/>, <http://localhost:3000'])
//     res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
//     res.append('Warning', '199 Miscellaneous warning')
//     res.end();
// })

//Does the same thing as append; but preferred cause you can do multiple sets
app.get('/response/set', function (req, res) {
    res.set('Content-Type', 'text-plain')

    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': '123',
        'Etag': '12345'
    })

    res.end();
})

var server = app.listen(5000, function() {
    console.log('Node server is running on port 5000');
});