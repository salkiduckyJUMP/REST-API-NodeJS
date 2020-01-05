var connect = require("connect");
var app = connect();

function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Connect');
    next();
}

//Won't get the asynchronous response, without a promise or a async/await...
function processing(req, res, next) {
    res.write("Processing...! Wait for 3 seconds.");
    setTimeout(() => {
        res.write("processing Done!");
    },3000);
    next();
}

function sayGoodbye(req, res, next) {
    res.end("Goodbye World");
}

app
    .use("/hello", sayHello)
    //sayHello will only be at the url 'hello', gets skipped
    .use(processing)
    .use(sayGoodbye)
    .listen(3031);

console.log("Server is listening on port 3031");