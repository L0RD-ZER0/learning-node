import Express from 'express';
import * as express from 'express';
import bodyParser from 'body-parser';


import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { makePath } from "./utils";
import * as errorController from "./controllers/error";


const PORT = process.env.PORT || '3000';
const app: express.Express = Express();


app.set('view engine', 'ejs');
app.set('views', makePath('src', 'views'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(makePath('src', 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
