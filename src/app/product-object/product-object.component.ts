import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from "../product";

@Component({
  selector: 'app-product-object',
  templateUrl: './product-object.component.html',
  styleUrls: ['./product-object.component.css']
})
export class ProductObjectComponent implements OnInit {
  
  ngOnInit() { }

  public product_list;
  public productId;
  public selectedId;

  constructor(private router: Router, private productservice: ProductService) {
    this.product_list = this.productservice.getProduct();
   }

  onSelect(product) {
    this.router.navigate(["/product", product.id, JSON.stringify(product)]);
  }
  isSelected(product) {
    return product.id === this.selectedId;
  }
  edit(product: Product) {
    console.log(product);
    this.router.navigate(["/product/edit/", product.id]);
  }
  delete(product: Product) {
    if (confirm("Are you sure that you want to delete this record?"))
      this.productservice.deleteProduct(product);
  }
  chart(typeOfChart: string) {
    if (typeOfChart === "next") {
      typeOfChart = this.nextType();
    }
    this.router.navigate(["/products", "chart", typeOfChart]);
  }
  nextType() {
    ProductObjectComponent.current++;
    if (ProductObjectComponent.current > 2) {
      ProductObjectComponent.current -= 3;
    }
    return this.typeArray[ProductObjectComponent.current];
  }
  public static current = 0;
  public typeArray = ["pie", "bar", "line"];
}
