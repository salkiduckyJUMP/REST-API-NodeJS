setTimeout(() => {
    console.log("timeout");
}, 0);

//Evaluate in next cycle
setImmediate(() => {
    console.log("immediate");
});

//One queue for setTimeout and setInterval
//A separate queue for setImmediate
//Six callback queues exist as part of the event loop

//No gurantee of which one goes first because they're in different stacks!

