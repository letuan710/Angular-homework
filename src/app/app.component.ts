import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  products: Product[]=[];
  subTotal: number = 0;
  totalItems: number = 0;

  constructor(private productService: ProductService){
    this.products = this.productService.products;
    this.productService.calculatorAndEmiter();
    this.subTotal= this.productService.subTotal;
    this.totalItems = this.productService.totalItems;

  }

  calculator(){
    this.productService.calculator();
  }

  remove(productId){
    this.productService.xacnhan(productId);
  }
  // totalPrice(e){
  //   this.subTotal = e;
  // }
  // totalItem(e){
  //   this.totalItems = e;
  // }


}
