const fs = require("fs");

fs.readFile(__dirname + '/file.txt', "utf8", function(err,data) {
    if(err) {
        throw new Error(err);
    };

    //print contents otherwise
    console.log(data);
});

const data = fs.readFileSync(__dirname + "/test.txt", "utf8");
console.log(data);

//We get test first instead of file