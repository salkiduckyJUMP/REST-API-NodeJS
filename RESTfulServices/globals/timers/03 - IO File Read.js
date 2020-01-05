//IO has a different queue too

//Time -> I/O -> Immediate

const fs = require("fs");

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log("timeout");
    }, 0);

    setImmediate(() => {
        console.log("immediate");
    });
});

//Immediate will always go before timeout here due to the I/O queue