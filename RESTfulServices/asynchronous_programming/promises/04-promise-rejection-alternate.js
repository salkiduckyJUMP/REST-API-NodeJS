//reject method is more explicit in what the error is

const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject(new Error("goodbye world"));
    }, 1000);
});

ourPromise.then(
    data => {
        console.log("success");
    },
    err => {
        console.log(err);
    }
);