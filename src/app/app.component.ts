import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   this.calculator()
  }
  title = 'shoppingcart';
  subTotal: number= 0;
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
  totalPrice(e){
    this.subTotal = e;
  }
  totalItem(e){
    this.totalItems = e;
  }
  calculator(){

    for (const item of this.products) {
      this.totalItems += item.quantity;
      this.subTotal += item.quantity * item.price;
    }


  }


}
