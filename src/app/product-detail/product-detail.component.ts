import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productId;
  public product;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get("id"));
      this.product = JSON.parse(params.get("product"));
    });
  }

  gotoProduct() {
    this.router.navigate(['/products']);
  }

  goPrevious() {
    let previousId = this.productId - 1;
    this.router.navigate(['/products', previousId]);
  }
  goNext() {
    let nextId = this.productId + 1;
    this.router.navigate(['/products', nextId]);
  }


}
