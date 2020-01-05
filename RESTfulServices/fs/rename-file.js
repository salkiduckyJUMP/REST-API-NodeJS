const fs = require("fs");

fs.rename(__dirname + '/file.txt', __dirname + '/hello.txt', (err) => {
    if (err) throw err;
    console.log('File has been renamed!');
});