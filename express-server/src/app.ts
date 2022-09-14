import Express from 'express';
import * as express from 'express';
import bodyParser from 'body-parser';


import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { makePath } from "./utils";


const PORT = process.env.PORT || '3000';
const app: express.Express = Express();


app.set('view engine', 'ejs');
app.set('views', makePath('src', 'views'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(makePath('src', 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found!',
    path: req.url,
  });
});

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
