//triggering event with emit function

var EventEmitter = require('events');

var ee = new EventEmitter();

ee.on('message', function (text) {
    console.log(text);
})

ee.emit('message', 'hello world');

//We use event emitters to communicate between children and parent components
