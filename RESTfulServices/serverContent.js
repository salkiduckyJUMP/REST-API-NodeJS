let fs = require('fs'); let http = require('http'); let server = http.createServer( (req, res) => {     
    fs.readFile('content.html', (err, fileData) => {         
        res.writeHead(200, { 'Content-Type': 'text/html'});         
        res.write(fileData);         
        res.end();    
     }) 
}); server.listen(8081); 