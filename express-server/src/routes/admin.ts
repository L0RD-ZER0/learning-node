import { Router } from "express";
import { Product } from "../interfaces/product";


export const router = Router();

export const products: Product[] = [];

router.get('/add-product', (req, res) => {  // matching is done on the basis of starts-with
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
  products.push({ title: req.body.title });
  res.redirect('/');
});

export default router;
