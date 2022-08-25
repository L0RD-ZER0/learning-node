import { Router } from "express";
import { makePath } from "../utils";


export const router = Router();

router.get('/', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  // res.send('<h1>Hello from Express!</h1>');
  res.sendFile(makePath('src', 'views', 'shop.html'));
});

export default router;
