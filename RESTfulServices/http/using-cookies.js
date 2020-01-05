const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    
    let cookies = request.headers.cookie;

    if(!cookies) {
        let cookieName = "session";
        let cookieValue = "123456";
        let numberOfDays = 4;
        let expiryDate = new Date();

        expiryDate.setDate(expiryDate.getDate() + numberOfDays);

        let cookieText = `${cookieName}=${cookieValue};expires=${expiryDate.toUTCString()}`

        response.setHeader('Set-Cookie', cookieText);
        //Write head can give status code along with the key, value pair
        //Location indicates the target of a redirection---the url of a newly created resource; when used with a 3xx or 201 status code
        response.writeHead(302, {'Location': '/'});
        //302 status code is 'Found'; the resource requested has been temporarily moved to the URL provided by the Location header

        return response.end();
    }

    // . = any character
    // * = 0 or one times
    // $ = end of

    //Extracting the key and value of the cookie based on a regular expression
    cookies.split(';').forEach(cookie => {
        let m = cookie.match(/(.*?)=(.*)$/);
        console.log(m);
        cookies[m[1].trim()] = (m[2] || '').trim();
    });


    response.end(`Cookie Set: ${cookies.toString()}`);
}).listen(8080);

console.log("Server listening on port 8080");