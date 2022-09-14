import { Router } from "express";
import { Product } from "../interfaces/product";


export const router = Router();

export const products: Product[] = [];

router.get('/add-product', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  // res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  // res.sendFile(makePath('src', 'views', 'add-product.html'));
  // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
  res.render('add-product', {
    pageTitle: 'Add Product',
    activeAddProduct: true,
    fomrsCSS: true,
    productCSS: true,
    path: '/admin/add-product'
  });
});

router.post('/add-product', (req, res) => {
  console.log(req.body);
  // products.push(req.body.title);
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default router;
