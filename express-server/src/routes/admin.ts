import { Router } from "express";

import * as productsController from "../controllers/products";


export const router = Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

export default router;
