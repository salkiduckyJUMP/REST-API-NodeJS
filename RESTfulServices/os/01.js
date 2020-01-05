const os = require('os');

//Total memory
console.log(os.totalmem());
//Free memory
console.log(os.freemem());

//Information about CPUs
console.log(os.cpus());

//Information about network interfaces
console.log(os.networkInterfaces());

//more OS info

console.log(os.hostname());
console.log(os.type());
console.log(os.endianness());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());