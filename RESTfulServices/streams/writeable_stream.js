const fs = require('fs');

const data = 'Writable Stream Example'

const writerStream = fs.createWriteStream(__dirname + '/write.txt')

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function () {
    console.log('writing completed!');
})

writerStream.on('error', function (err) {
    console.log(err.stack)
})

console.log('Streaming Ended')