import { Request, Response } from "express";
import { Product } from "../interfaces/product";

export const products: Product[] = [];

export const getAddProduct = (req: Request, res: Response) => {  // matching is done on the basis of starts-with
  res.render('add-product', {
    pageTitle: 'Add Product',
    activeAddProduct: true,
    fomrsCSS: true,
    productCSS: true,
    path: '/admin/add-product'
  });
}

export const postAddProduct = (req: Request, res: Response) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
}

export const getProducts = (req: Request, res: Response) => {  // matching is done on the basis of starts-with
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
    path: '/',
  });
}
