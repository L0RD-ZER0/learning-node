import { Router } from "express";
// import { makePath } from "../utils";

import { products } from "./admin";


export const router = Router();

router.get('/', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  // res.send('<h1>Hello from Express!</h1>');
  // console.log('shop.js:', products);
  // res.sendFile(makePath('src', 'views', 'shop.html'));
  // res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
  });
});

export default router;
