var express = require('express');
var redis = require("redis");
var logger = require('morgan');
var client = redis.createClient();
var session = require('express-session');

//Redis is an open source in-memory data structure store, used as a database, cache and message broker.


//pass express to the connect redis module
//allowing it to inherit from session.Store
var RedisStore = require('connect-redis')(session);
var app = express();
app.use(logger('dev'));

//Populates req.session
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something is stored
    secret: 'keyboard cat',
    store: new RedisStore ({ host: 'localhost', port: 6379, client: client })
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