const path = require('path');
const express = require('express');
const routes = require('./routes');


const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
