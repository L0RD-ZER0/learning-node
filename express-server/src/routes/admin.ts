import { Router } from "express";
import { makePath } from "../utils";


export const router = Router();

export const products: string[] = [];

router.get('/add-product', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  // res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  res.sendFile(makePath('src', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  console.log(req.body);
  products.push(req.body.title);
  res.redirect('/');
});

export default router;
