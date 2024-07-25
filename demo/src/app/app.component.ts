import { Component, Inject } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // public products: any = [];
  // public posts: any = [];
  // public postsFetch: any = [];
  // constructor(
  //   @Inject(ProductService) private _productService: ProductService
  // ) {}
  // // @Inject(PostService) private _postService: PostService) {}
  // ngOnInit() {
  //   this.products = this._productService.getProducts();
  //   // using observable
  //   // this._postService.getPosts().subscribe(data => {
  //   //   this.posts = data;
  //   // });
  // }
}
