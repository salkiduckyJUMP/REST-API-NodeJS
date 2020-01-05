const fs = require("fs");

fs.unlink(__dirname + '/test.txt', (err) => {
    if (err){ throw err;}
    console.log('test.txt was removed');

});

//Another way to do this with aysnchronously
// fs.unlinkSync('test.txt');