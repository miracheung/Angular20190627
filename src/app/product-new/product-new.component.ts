import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  title = "Add New Product Form";
  productModel = new Product(this.productService.getNextId(), "", 0, "", "");
  submitted = false;
  errorMsg = "";

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.productService.addProduct(this.productModel);
    this.router.navigate(["/"]);
  }
}
