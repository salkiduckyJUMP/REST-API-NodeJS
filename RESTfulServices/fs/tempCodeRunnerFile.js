const status = fs.statSync(__dirname + '/test.txt');

console.log(status.isFile());
console.log(status.isSymbolicLink());
console.log(status.isSymbolicLink());
console.log(status.size);