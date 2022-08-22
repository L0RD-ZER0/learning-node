const http = require('http');


// function requestListener(req, res) {
//     console.log(req, res);
// }
//
// http.createServer(requestListener);

const server = http.createServer((req, res) => {
    console.log(req, res);
});

server.listen(process.env.PORT || 3000);
