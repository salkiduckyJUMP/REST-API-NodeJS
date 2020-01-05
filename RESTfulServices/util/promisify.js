const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

readFile(__dirname + '/index.txt', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log('Error', err);
    });

    //Advantage: When you have multiple success callbacks.