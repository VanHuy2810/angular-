import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(
    private router: Router,
    @Inject(ProductService) private _productService: ProductService
  ) {}

  public products: any = [];

  ngOnInit() {
    this.products = this._productService.getProducts();
  }
  // @Input() data!: any;
  // @Output() dataChange = new EventEmitter<any>();

  // Khai báo một object để lưu trữ số lượng đã chọn cho mỗi sản phẩm
  selectedQuantities: { [key: string]: number } = {};
  // Hàm để thay đổi số lượng cho sản phẩm
  qttchange(event: any, id: number) {
    const quantity = parseInt(event.target.value);
    this.selectedQuantities[id] = quantity;
  }

  // Khai báo một object để lưu trữ size đã chọn cho mỗi sản phẩm
  selectedSizes: { [key: string]: string } = {};
  // Hàm để chọn size cho sản phẩm
  selectSize(size: string, productId: number) {
    // Lưu trữ size đã chọn cho sản phẩm tương ứng
    this.selectedSizes[productId] = size;
  }

  // Khai báo một object để lưu trữ màu đã chọn cho mỗi sản phẩm
  selectedColors: { [key: string]: string } = {};
  //hàm để chọn màu cho sản phẩm
  selectColor(color: string, productId: number) {
    //lưu trữ màu đã chọn cho sản phẩm tương ứng
    this.selectedColors[productId] = color;
  }

  onSelect(products: any) {
    this.router.navigate(['/products', products.id]);
  }
}
