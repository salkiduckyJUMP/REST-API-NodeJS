const fs = require('fs');

let data = ''
const readerStream = fs.createReadStream(__dirname + '/data.txt')

//Data comes in chunks instead of all at once
readerStream.on('data', (chunk) => {
data += chunk
})

readerStream.on('end', () => {
console.log(data)
})

readerStream.on('error', (err) => {
console.log(err.stack)
})
