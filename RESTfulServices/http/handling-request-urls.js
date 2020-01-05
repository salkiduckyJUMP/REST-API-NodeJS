var http = require('http'); //Import Node.js core module
//http is a lower level API, so you need to configure a lot of it yourself

var server = http.createServer(function (req, res) {
    //create web server
    if (req.url == '/') { //Check URL of current response
        //set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        //set response content
        res.write('<html><body><p>Home Page</p></body></html>');
        res.end();    
    } else if (req.url == "/student") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>Student Page</p></body></html>');
        res.end();
    } else if (req.url = "/admin") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>Admin Page</p></body></html>');
        res.end();
    } else {
        res.end('Invalid Request!');
    }
});

server.listen(5000);

console.log("Server listening on Port 5000");