//Sequential steps can be done in Connect
//Third party module, needs installation
var connect = require("connect");
var app = connect();

//Acting like a Middleware
function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Connect');
}

app
    .use(sayHello)
    .listen(3031);

console.log("Server is listening on port 3031");