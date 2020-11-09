import { Injectable } from '@angular/core';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }
  subTotal: number = 0;
  totalItems: number = 0;

  discount: number = 0;
  coupon = [
    {
      code: '1200',
      value: 10,
    },
    {
      code: '1201',
      value : 11,
    }
  ]

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


  // calculator() {
  //   console.log('2')
  //   for (const item of this.products) {
  //     this.totalItems += item.quantity;
  //     this.subTotal += item.quantity * item.price;
  //   }
  // }
  calculatorAndEmiter() {
    this.totalItems = 0;
    this.subTotal = 0;
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

  promotion(code: String){
    const i: number = this.coupon.findIndex(coupon => coupon.code === code);
    if(i != -1  ){
      this.discount = this.coupon[i].value
    }
  }

  getSubtotal(): number {
    return this.subTotal;
  }
  getDiscount(): number {
    return this.discount;
  }
  getTotalItems(): number {
    return this.totalItems;
  }
}
