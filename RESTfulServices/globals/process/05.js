const fs = require("fs");

process.on('exit', function() {
    fs.writeFileSync(__dirname + '/myfile2.txt',
        'this must be saved on exit');
});

//Handle exceptions
process.on('uncaughtException', function(err) {
    console.error('An uncaught error occured');
    console.error(err.stack);
});

//uncaught errors require a custom error to be written
throw new Error('Custom err');