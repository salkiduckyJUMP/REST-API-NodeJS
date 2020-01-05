var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/data') { //Check URL of the current request
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.write(JSON.stringify({message: "Hello World"}));
    }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running...');