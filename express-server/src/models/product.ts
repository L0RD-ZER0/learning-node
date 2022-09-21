import { Product as IProduct } from "../interfaces/product";

const products: Product[] = [];

export class Product implements IProduct {
  constructor(
    public title: string
  ) { }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}

export default Product;
