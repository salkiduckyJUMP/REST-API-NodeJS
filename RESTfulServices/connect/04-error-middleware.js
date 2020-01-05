var connect = require("connect");
var app = connect();

function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Connect');
    console.log('in sayHello');
    next();
}

function processing(req, res, next) {
    res.write("Processing...! Wait for 3 seconds.");
    console.log('in processing.');
    throw new Error('boom!')
    next();
}

//Processing error -> skipping over the resolve of the sayGoodbye middleware

function sayGoodbye(req, res, next) {
    console.log("in Goodbye");
    res.end("Goodbye World");
}

function onError(err, req, res, next) {
    console.log("Error!");
    res.end(err);
}

app
    .use("/hello", sayHello)
    .use(processing)
    .use(sayGoodbye)
    .use(onError)
    .listen(3031);

console.log("Server is listening on port 3031");