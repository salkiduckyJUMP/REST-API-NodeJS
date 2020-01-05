var random = function () {
    return Math.random();
}

var randomNumber = random();

const ourPromise = new Promise((resolve, reject) => {
    if(randomNumber <= 0.5) {
        reject(new Error("too small!"));    
    } else {
        resolve(randomNumber);
    }
});

ourPromise.then(
    data => {
        console.log(randomNumber);
    },
    err => {
        console.log(randomNumber);
        console.log(err);
    }
)