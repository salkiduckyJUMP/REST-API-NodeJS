const dns = require("dns");
const fs = require("fs");

fs.readdir(__dirname, (err, files) => {
    console.log("1");
    console.error(err);
    console.log(files);
});

fs.readdir(__dirname, function(err, files) {
    console.log("2");
    console.error(err);
    console.log(files);
});

