let express = require('express');
let cookieParser = require('cookie-parser');

let app = express()

app.use(cookieParser());

//basic route for homepage
app.get('/', (req, res) => {
    res.send('welcome to Express App');
});

//JSON object to be added to cookie
let users = {
    Name: "Salki",
    Age: "25"
}

//Route for adding cookie with an expiry date of 5 minutes
app.get('/setuser', (req, res) => {
    //res.cookie("userData", users, {expire: 360000 + Date.now()});
    res.cookie("userData", users, {maxAge: 360000});
    res.send('user data added to cookie');
});

//Iterate users data from cookie
app.get('/getuser', (req, res) => {
    //shows all cookies
    res.send(req.cookies);
});

//server listens to port 3000
app.listen(3000);
console.log('Server is listening on route 3000');