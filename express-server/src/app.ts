import Express from 'express';
import * as express from 'express';
import bodyParser from 'body-parser';



import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { makePath } from "./utils";


const PORT = process.env.PORT || '3000';
const app: express.Express = Express();

app.set('view engine', 'pug');
app.set('views', makePath('src', 'views'));

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();  // allow request to continue onwards
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(makePath('src', 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  // res.status(404).send('<h1>Page not found.</h1>');
  // res.sendFile(makePath('src', 'views', '404.html'));
  res.status(404).render('404');
});

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
