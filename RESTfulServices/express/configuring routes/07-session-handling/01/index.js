var express = require('express');
var session = require('express-session');
var app = express();

//One user can have one session at a time, a new session overrides the old session

//Redis is an open source in-memory data structure store, used as a database, cache and message broker.

//Populates req.session
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something is stored
    secret: 'keyboard cat'
}));

app.get('/', function(req, res) {
    var body = '';
    if (req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? View this page in several browsers :D</p>';
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times</p>');
});

app.listen(3000);
console.log('Server listening on port 3000...')