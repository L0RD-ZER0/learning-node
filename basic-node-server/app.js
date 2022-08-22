const http = require('http');


// function requestListener(req, res) {
//     console.log(req, res);
// }
//
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
    // console.log(req, res);
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.JS!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(process.env.PORT || 3000);
