var express = require('express');

var router1 = express.Router();

router1.get('/', (req, res, next) => {
    console.log("from router1!");
    res.send('From Router1!');
});

module.exports=router1;