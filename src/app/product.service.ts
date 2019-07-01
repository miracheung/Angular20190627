import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_list = [
    {id: 1, description: 'electricity', amount: 109.99, type: 'Utility', date: '06/30/2019'}, 
    {id: 2, description: 'gas', amount: 35.49, type: 'Utility', date: '06/30/2019'}
  ];

  private static currentId = 9;

  constructor() { }
  getProduct() {
    return this.product_list; 
  }
  addProduct(productModel: Product) {
    this.product_list.push(productModel);
  }
  getNextId() {
    return ProductService.currentId++;
  }
  deleteProduct(product: Product) {
    let index = this.product_list.indexOf(product);
    if (index < 0) {
      return false;
    }
    this.product_list.splice(index, 1);
    console.log("deleted");
  }
  getProductById(id: number) {
    for (let p of this.product_list) {
      if (p.id === id) return p;
    }
    return null;
  }
  editProduct(product: Product) {
    let p: Product = this.getProductById(product.id);
    if (!p) return;
    p.description = product.description;
    p.amount = product.amount;
    p.type = product.type;
    p.date = product.date;
  }
}
