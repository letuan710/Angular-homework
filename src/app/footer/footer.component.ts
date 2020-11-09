import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(private productService: ProductService){}

  // @Input() subTotal: number;
  // // subtotal: number;
  // @Input() discount: number;


  coupon: string = '';

  useCoupon() : void {
    this.productService.promotion(this.coupon);
  }

  getSubtotal(): number {
    console.log(this.productService.products);
    return this.productService.getSubtotal();
  }

  getDiscount():number{
    return this.productService.getDiscount();
  }
}
