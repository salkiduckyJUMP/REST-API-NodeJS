//Run me
var foo = require('./foo');
console.log('initial something:', foo.something); //123

//change something
foo.something = 456;

//load bar
var bar = require('./bar');
