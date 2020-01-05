//Cluster promises together

//NOTE: Don't go beyound 4 threads!
//Load balancing automatically.

var cluster = require('cluster');
const http = require('http');
var numCPUs = require('os').cpus().length;
console.log(numCPUs);

if (cluster.isMaster) {
    //fork workers
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    } 
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });
    
    cluster.on('exit', function (worker) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer((request, response) => {
        response.end('Hello world!');
    }).listen(8001);
}

//kill a thread using...
//cluster.workers[id].kill();