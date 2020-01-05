//Path module
const path = require('path');

console.log(path.normalize("../one/two/./three.html"));

let join = path.join("../","one","two","three.html");
console.log(join);

let dname = path.dirname("../one/two/three.html");
console.log(dname);

let bname = path.basename("../one/two/three.html");
console.log(bname);

let pstring = "../one/two/three.html";
console.log(path.extname(pstring));

console.log(pstring.slice(pstring.lastIndexOf(".")));

//They're both relative, so the second is taken
console.log(path.resolve('/one/two', '/three/four'));


console.log(path.resolve('/one/two/three', '../', 'four', '../../five'));

//without slash, appends onto your current path
console.log(path.resolve('one','two/three','four'));