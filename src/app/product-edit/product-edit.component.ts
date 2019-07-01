import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Product } from "../product";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = "Edit Product Form";
  public productId: number;
  submitted: boolean = false;
  public productModel: Product;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get("id"));
      this.productModel = this.productService.getProductById(this.productId);
    });
  }

  onSubmit(form: NgForm) {
    this.router.navigate(["/"]);
  }
}
