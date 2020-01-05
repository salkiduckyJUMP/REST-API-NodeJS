var EventEmitter = require('events');
var logger = new EventEmitter();

logger.once('error', function(message) {
    setImmediate(()=> {
        console.log('ERR: ' + message);
    })
});

logger.emit('error', 'This is the first error');
//logger.emit('error', 'This is the second error');