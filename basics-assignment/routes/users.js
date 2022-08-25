const users = require('./userData');


module.exports = function (req, res) {
    let template = `<html lang="en">
    <head><title>Users</title></head>
    <body><h1>Users:</h1><ul>`;
    for (let user of users) {
        template += `<li>${user}</li>`;
    }
    template += `</ul></body></html>`;
    res.write(template);
    return res.end();
}
