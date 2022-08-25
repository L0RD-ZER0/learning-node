const users = require('./userData');


exports.get = (req, res) => {
    res.write(`<html lang="en">
    <head><title>Create-User</title></head>
    <body>
        <form action="/create-user" method="post">
            <input type="text" name="username">
            <button type="submit">Submit</button>
        </form>
    </body>
</html>`);
    res.end();
};

exports.post = (req, res) => {
    let data = '';
    req.on('data', d => data += d);
    req.on('end', () => users.push(data.split('=')[1]));
    res.writeHead('301', { Location: '/' });
    return res.end();
};
