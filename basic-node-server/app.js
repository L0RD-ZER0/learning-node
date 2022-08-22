const http = require('http');
const fs = require("fs");


// function requestListener(req, res) {
//     console.log(req, res);
// }
//
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
    // console.log(req, res);
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.writeHead(302, {'Location': '/'});
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.JS!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(process.env.PORT || 3000);
