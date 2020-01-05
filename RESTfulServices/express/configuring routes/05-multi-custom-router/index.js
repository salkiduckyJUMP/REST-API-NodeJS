var express = require('express');
var app = express();

app.use('/api/v1', require('./controllers/router1'));
app.use('/api/v2', require('./controllers/router2'));

app.get('/', function (req, res) {
    console.log('from root route!')
    res.send('Hello from Root Route!')
});

app.listen(3000);
console.log('Express started on port 3000');