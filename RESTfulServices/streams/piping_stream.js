const fs = require('fs')

const readerStream = fs.createReadStream('streams/data.txt')

const writerStream = fs.createWriteStream('streams/data2.txt')

readerStream.pipe(writerStream)

console.log('Piping ended!')