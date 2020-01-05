//setImmediate is faster

var i = 0;

var start = new Date();

function foo() {
    i++;
    if( i< 1000){
        setTimeout(foo, 0);
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start))
    }
}

foo();