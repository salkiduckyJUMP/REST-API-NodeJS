var Stream = require('stream');
var stream = new Stream();
stream.readable = true;

//Reads out one character at a time!
var c=64;
var timer = setInterval(function () {
    if (++c >= 75) {
        clearInterval(timer);
        stream.emit('end');
    }
    
    else stream.emit('data', String.fromCharCode(c));
}, 100);

stream.pipe(process.stdout);