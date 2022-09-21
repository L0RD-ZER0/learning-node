import fs from "fs";
import { Product as IProduct } from "../interfaces/product";
import { makePath } from "../utils";


const filePath = makePath('data', 'products.json');

export class Product implements IProduct {
  constructor(
    public title: string
  ) { }

  save() {
    let products: Product[] = [];
    fs.readFile(filePath, async (err, data) => {
      if (!err) {
        products = JSON.parse(data.toString());
      } else if (err && err.code === 'ENOENT') {
        fs.writeFile(filePath, JSON.stringify(products), (err) => {
          console.log(err);
        });
      } else {
        throw err;
      }
      console.log(products);
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    //  Error here because of scope of callback in readFile.
    fs.readFile(filePath, (err, data) => {
      let products: Product[] = [];
      if (!err) {
        products = JSON.parse(data.toString());
      } else if (err && err.code === 'ENOENT') {
        fs.writeFile(filePath, JSON.stringify(products), (err) => {
          console.log(err);
        });
      } else {
        throw err;
      }
      return products;
    });
  }
}

export default Product;
