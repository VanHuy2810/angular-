import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  public productsid: number = 0;

  constructor(
    private route: ActivatedRoute,
    @Inject(ProductService) private _productService: ProductService
  ) {}

  // ngOnInit() {
  //   let id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
  //   this.productsid = id;
  // }
  public products: any = [];

  ngOnInit() {
    this.products = this._productService.getProducts();
  }
}
