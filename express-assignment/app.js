const express = require('express');


const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    console.log(`Requested ${req.method}:${req.url}`);
    next();
});

app.use('/users', (req, res, next) => {
    res.send("<h1>Users-Page</h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1>Home-Page</h1>");
});

app.listen(port,
    () => console.log(`Server listening at localhost:${ port }`));