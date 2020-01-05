var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

//define routes here

//USer object
let users = [
    {name: 'John'},
    {name: 'Rohan'},
    {name: 'Salki'}
]

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('This is Home');
});

app.post('/submit-data', function (req, res) {
	var name = req.body.firstName + '' + req.body.lastName;

	res.send(name + 'Submitted successfully!');
});

app.get('/error', (req, res) => {
    res.redirect(301, "/");
});

app.get('/content', function (req, res, next) {
    res.format({
        html: function () {
            res.send('<ul>' + users.map(function (user) { return '<li>' 
                + user.name + '</li>';}).join('') + '</ul>');
        },

        text: function () {
            res.send(users.map(function (user) { return ' - ' + user.name + '\\n';})).join('');
        },

        json: function () { res.json(users);}
    })
})

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

var server = app.listen(5001, function () {
    console.log('Node server is running on port 5001...');
});


//http://localhost:5000/hello.txt
//http://localhost:5000/js/app.js
//http://localhost:5000/css/style.css