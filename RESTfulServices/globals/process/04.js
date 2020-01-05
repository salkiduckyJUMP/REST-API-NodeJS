const fs = require("fs");

//Before the process exits, write a file
process.on('exit', function() {
    fs.writeFileSync(__dirname + '/myfile.txt',
        'this must be saved on exit');
});