import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }
  subTotal: number = 0;
  totalItems: number = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'de1',
      image:
        'https://autobikes.vn/stores/news_dataimages/thoct/072019/25/16/thumbnail/4037_xe_dien_VinFast_1.jpg',
      price: 100,
      quantity: 1,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'de1',
      image:
        'https://autobikes.vn/stores/news_dataimages/thoct/072019/25/16/thumbnail/4037_xe_dien_VinFast_1.jpg',
      price: 6,
      quantity: 1,
    },
  ];

  calculator() {
    for (const item of this.products) {
      this.totalItems += item.quantity;
      this.subTotal += item.quantity * item.price;
    }
  }
  calculatorAndEmiter() {
    console.log('asd')
    for (const item of this.products) {
      this.totalItems += item.quantity;
      this.subTotal += item.quantity * item.price;
    }
  }
  xacnhan(productId: String) {
    if (confirm('Xác nhận xóa')) {
      this.remove2(productId);
    }
  }

  remove2(productId: String) {
    this.products = this.products.filter((p) => p.id !== productId);
    let sum = 0;
    let totalPrice = 0;

    this.calculatorAndEmiter();
  }


}
