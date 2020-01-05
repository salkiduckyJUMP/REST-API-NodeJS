// //as Promise
// function square(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(Math.pow(x, 2));
//         }, 2000);
//     });
// }

// square(10).then(data => {
//     console.log(data);
// });

//Converted into async/await
//Mine:
function square(x) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await square(10);
    return x * x;
}

addAsync(10) . then ((product) => {
    console.log(product);
})

//Await applies to something that returns a promise
//You can only await on a promise and async function returns a promise

//Good to use async/await when we have multiple promises

//Actual Result:
function square(x) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 2000);
    });
}

async function layer(x) {
    const value = await square(x);
    console.log(value);
}

layer(10);

//Another Solution!
let test = async(x) => {
    //Wrap setTimeout inside of a Promise
    let a = await new Promise((resolve)=>setTimeout(() =>{
        resolve(Math.pow(x,2));
    }, 2000));
    return a;
}

test(5).then((data)=> {
    console.log(data);
})

//Three rules:
//any function that returns a value can be attached with the prefix 'async'; it now returns a promise
