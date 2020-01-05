//Hello is printed after 5 seconds
setTimeout(() => {
    console.log("Hello");
}, 5000);

//Each second count goes up by one
var count = 0;
var inter = setInterval(() => {
    if(count < 5) {
        console.log("Count value is:" + count);
    } else {
        clearInterval(inter);
    }
    count++;
}, 1000);