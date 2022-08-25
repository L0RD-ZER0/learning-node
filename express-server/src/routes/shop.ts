import { Router } from "express";

export const router = Router();

router.get('/', (req, res) => {  // matching is done on the basis of starts-with
  // console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

export default router;
