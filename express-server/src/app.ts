import express, { Express } from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';


const PORT = process.env.PORT || '3000';
const app: Express = express();

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();  // allow request to continue onwards
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
