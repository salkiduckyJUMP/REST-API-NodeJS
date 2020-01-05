const fs = require("fs");

fs.writeFile(__dirname + '/file.txt', "Hello lukeeee nodeJS", function(err) {
    //if (err) return callback(err);

    if (err) 
    throw new Error(err);

    //otherwise, print
    console.log("Wrote to file successfully!");
});

try {
    const file = fs.writeFileSync(__dirname + '/test.txt', "Hello World");
} catch (err) {
    console.error(err)
}

