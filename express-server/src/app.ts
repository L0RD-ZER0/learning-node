import express, { Express } from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || '3000';
const app: Express = express();

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();  // allow request to continue onwards
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
