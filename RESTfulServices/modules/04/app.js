var foo = require('./foo');

//create new object
var obj1 = foo();
var obj2 = foo();

obj2.something = 456;
//use it
console.log(obj1.something);
console.log(obj2.something);

//We're using foo module as an object factory