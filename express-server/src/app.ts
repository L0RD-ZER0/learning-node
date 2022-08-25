import express, { Express } from 'express';

const PORT = process.env.PORT || '3000';
const app: Express = express();

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();  // allow request to continue onwards
// });

app.use('/add-product', (req, res) => {  // matching is done on the basis of starts-with
  console.log('In another middleware');
  res.send('<h1>The "App-Product" page.</h1>');
});

app.use('/', (req, res) => {  // matching is done on the basis of starts-with
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
