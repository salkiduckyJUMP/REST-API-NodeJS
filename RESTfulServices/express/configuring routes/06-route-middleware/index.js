//Middleware specifically to control routing!

var express = require('express');
var app = express();

var users = [
    { id: 0, name: 'Buck', email: 'buck@gmail.com', role: 'member' },
    { id: 1, name: 'Thor', email: 'thor@gmai.com', role: 'member' },
    { id: 2, name: 'Amy', email: 'amy@gmail.com', role: 'admin' }
];

function loadUser(req, res, next) {
    //You would fetch your user from the db
    var user = users[req.params.id];
    if (user) {
        req.user = user;
        next();
    } else {
        next(new Error('Failed to load user ' + req.params.id));
    }
}

app.get('/', function (req, res) {
    res.redirect('/user/0');
});

app.get('/user/:id', loadUser, function(req, res) {
    res.send('Viewing user ' + req.user.name);
});

app.listen(3000);
console.log('Server is listening on route 3000');