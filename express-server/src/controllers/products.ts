import { Request, Response } from "express";
import Product from "../models/product";


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
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

export const getProducts = (req: Request, res: Response) => {  // matching is done on the basis of starts-with
  res.render('shop', {
    prods: Product.fetchAll(),
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
    path: '/',
  });
}
