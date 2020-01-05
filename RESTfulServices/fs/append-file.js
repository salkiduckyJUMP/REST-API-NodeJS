const fs = require("fs");
fs.appendFile(__dirname + '/file.txt', "Even You!", function(err) {
    //if (err) return callback(err);

    if (err) 
    throw new Error(err);

    //otherwise, print
    console.log("Wrote to file successfully!");
});
