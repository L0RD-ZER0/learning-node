const createUser = require('./create-user');
const users = require('./users');


function main(req, res) {
    res.write(`<html lang="en">
    <head><title>Welcome!</title></head>
    <body>
    <ul>
        <li><a href="/users">Users</a></li>
        <li><a href="/create-user">Create-User</a></li>
    </ul>
    </body>
</html>`);
    return res.end();
}

function not_found(req, res, url, method) {
    res.write(`<html lang="en">
    <head><title>Not Found!</title></head>
    <body>
    <h3>No path \`${method}: ${url}\` was found on the server.</h3>
    </body>
</html>`);
    return res.end();
}

// const usersData = ['User-1'];

module.exports = function (req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/' && method === 'GET') {
        return main (req, res);
    } else if (url === '/users' && method === 'GET') {
        return users(req, res);
    } else if (url === '/create-user' && method === 'GET') {
        return createUser.get(req, res);
    } else if (url === '/create-user' && method === 'POST') {
        return createUser.post(req, res);
    } else {
        console.log(url);
        return not_found(req, res, url, method);
    }
}
