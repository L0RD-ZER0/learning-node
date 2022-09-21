import path from "path";
import bodyParser from "body-parser";
import * as express from 'express';

const app: express.Express = express.default();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(__dirname), 'src', 'views'));
app.use(bodyParser.urlencoded());

const userData: string[] = [];

app.get('/', (req, res) => {
    res.render('form', {
        path: '/',
        pageTitle: 'Form',
    });
});

app.get('/users', (req, res) => {
    res.render('users', {
        path: '/users',
        pageTitle: 'Users',
        users: userData,
    });
});

app.post('/users', (req, res) => {
    userData.push(req.body.name);
    res.redirect('/');
});

app.use(express.static(path.join(path.dirname(__dirname), 'public')));

app.get('*', (req, res) => {
    res.render('404', {
        path: req.url,
        pageTitle: 'Page not found.',
    });
});



app.listen(PORT, () => {
   console.log(`App listening at localhost:${PORT}`);
});
