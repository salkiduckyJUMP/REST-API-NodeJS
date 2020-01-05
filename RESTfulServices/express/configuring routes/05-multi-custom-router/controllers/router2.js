var express = require('express');

var router = express.Router();

router.get('/', (req, res, next) => {
    console.log("from router2!");
    res.send('From Router2!');
});

module.exports=router;