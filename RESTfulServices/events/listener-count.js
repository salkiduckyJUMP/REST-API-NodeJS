//Can have many listeners for the same event
//They'll all execute!

var EventEmitter = require('events');
var logger = new EventEmitter();

logger.on('error', function(message) {
    console.log('ERR: ' + message);
});

logger.on('error', function() {
    console.log('Generic ERR: ');
});

logger.on('error', function() {
    console.log('ERR: ' + Date.now());
});

logger.emit('error', 'this is the first error');
logger.emit('error', 'this is the second error');

//Returns count of event listeners
console.log(EventEmitter.listenerCount(logger, 'error'));