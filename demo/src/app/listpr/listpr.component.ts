import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpr',
  templateUrl: './listpr.component.html',
  styleUrl: './listpr.component.css',
})
export class ListprComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'kekeke',
      price: 10.99,
      nonprice: 20.99,
      img: [
        'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-005.jpg',
        'https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg',
        'https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp',
        'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg',
        'https://nhadepso.com/wp-content/uploads/2023/01/tong-hop-50-hinh-anh-thien-nhien-dep-hung-vi-tho-mong_7.jpg',
        'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg',
      ],
      color: ['red', 'orange', 'green', 'blue ', 'yellow'],
      size: ['25x35', '35x45', '45x45'],
      Invi: false,
      sell: false,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'what a dab',
      price: 19.99,
      nonprice: 30.99,
      img: [
        'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-005.jpg',
        'https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg',
        'https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp',
        'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg',
        'https://images.baoangiang.com.vn/image/fckeditor/upload/2020/20201205/images/nhung-buc-anh-dep-nhat-nam-2020-theo-do-agora-binh-chon.jpg',
      ],
      color: ['red', 'orange', 'green', 'blue ', 'yellow'],
      size: ['25x35', '35x45', '45x45'],
      Invi: true,
      sell: false,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'ngau vai',
      price: 7.99,
      nonprice: 10.99,
      img: [
        'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-005.jpg',
        'https://xwatch.vn/upload_images/images/2023/03/29/anh-chill-bau-troi.jpg',
        'https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp',
        'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg',
        'https://nhadepso.com/wp-content/uploads/2023/01/tong-hop-50-hinh-anh-thien-nhien-dep-hung-vi-tho-mong_7.jpg',
      ],
      color: ['red', 'orange', 'green', 'blue ', 'yellow'],
      size: ['25x35', '35x45', '45x45'],
      Invi: false,
      sell: true,
    },
  ];
  constructor(private router: Router) {}
  onSelect(products: any) {
    this.router.navigate(['/listpr', products.id]);
  }
}
