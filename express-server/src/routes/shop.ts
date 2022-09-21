import { Router } from "express";

import * as productsControllers from "../controllers/products";


export const router = Router();

router.get('/', productsControllers.getProducts);

export default router;
