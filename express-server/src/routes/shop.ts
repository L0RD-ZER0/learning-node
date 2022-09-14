import { Router } from "express";

import { products } from "./admin";


export const router = Router();

router.get('/', (req, res) => {  // matching is done on the basis of starts-with
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
    path: '/',
  });
});

export default router;
