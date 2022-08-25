import express, { Express } from 'express';

const PORT = process.env.PORT || '3000';
const app: Express = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next();  // allow request to continue onwards
});

app.use((req, res, next) => {
  console.log('In another middleware');
});

app.listen(PORT, () => console.log(`Server started at localhost:${ PORT }`));
