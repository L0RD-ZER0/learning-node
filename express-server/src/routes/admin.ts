import { Router } from "express";

export const router = Router();

router.get('/add-product', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
