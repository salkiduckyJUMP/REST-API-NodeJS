const fs = require("fs");

//non-sync version done on hello.txt
fs.stat(__dirname + '/hello.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(stats.isFile());
    console.log(stats.isSymbolicLink());
    console.log(stats.isDirectory());
    console.log(stats.size);
});

//Async version done on test.txt; reminder--comes first because it goes to the queue

const status = fs.statSync(__dirname + '/test.txt');

console.log(status.isFile());
console.log(status.isSymbolicLink());
console.log(status.isSymbolicLink());
console.log(status.size);