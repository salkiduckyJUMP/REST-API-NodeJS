//TIMEOUT 1-3 followed by SETIMMEDIATE 1-2

(function() {
    console.log("TIMEOUT 1");
    setImmediate(function() {
        console.log("SETIMMEDIATE 1");
    });
}, 0);

setTimeout(function() {
    console.log("TIMEOUT 2");
    setImmediate(function() {
        console.log("SETIMMEDIATE 2");
    });
}, 0);

setTimeout(function() {
    console.log("TIMEOUT 3");
}, 0);