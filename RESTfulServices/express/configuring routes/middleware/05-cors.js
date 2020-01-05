//Fixes the problem where a client and server may be on a different port

//CORS fixes where a application may be trying to access a different port than what was specified
//Gives access to all ports and IP addresses by default

//What kind of access you want to give when the origin is different!!

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.get('/with-cors', cors(), (req, res, next) => {
    res.json({ msg: 'With CORS, it works!'})
})

app.listen(3000, (req, res) => {
    console.log('server running on 3000')
})