const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("hello world");
    }, 1000);
});
//First argument of then is success callback
ourPromise.then(data => {
    console.log(data);
}

//Second argument will be error calll
);