//Asynchronous

var EventEmitter = require('events');
var logger = new EventEmitter();

logger.on('error', function(message) {
    setImmediate(()=> {
        console.log('ERR: ' + message);
    })
})