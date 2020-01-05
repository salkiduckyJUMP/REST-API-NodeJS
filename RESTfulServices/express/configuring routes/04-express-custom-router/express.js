//Segregate routes

var express = require('express');
var path = require("path");
var app = express();

var router = express.Router();
//Register your router and set your path to start with '/'
app.use('/', router);

router.param('user_id', function (req, res, next, id) {
    //sample user, where it would call from the database
    req.user = {
        id: id,
        name: 'TJ'
    }
    next()
});

//Instead of using app.get, post, etc; we use the router and define routes on the router object
//This handles routing for us, making the routing easier to read
//Only one post will run, only one get will run, etc...

router.get('/test', (req, res) => {
    console.log("from test");
});
// /test triggers the router because it begins with "/"

router.route('/users/:user_id')
    .all(function (req, res, next) {
        //runs for all HTTP verbs first
        //Like route-specific middleware!!
        console.log("hello");
        next()
    })
    .get(function (req, res, next) {
        res.json(req, user)
    })
    .put(function (req, res, next){
        //Example of maybe updating the user
        req.user.name = req.params.name
        //save user, etc
        res.join(req.user)
    })
    .post(function (req, res, next) {
        next(new Error('Not Implemented'))
    })
    .delete(function (req, res, next) {
        next(new Error('Not Implemented'))
    })

    var server = app.listen(5000, function () {
        console.log('Node server is running...');
    });




//http:5000/users/4