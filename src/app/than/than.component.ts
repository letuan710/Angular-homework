import { isNgTemplate } from '@angular/compiler';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-than',
  templateUrl: './than.component.html',
  styleUrls: ['./than.component.css'],
})
export class ThanComponent {
  @Input() products: Product[];
  @Output() prodPrice = new EventEmitter<Number>();
  @Output() prodtotal = new EventEmitter<Number>();

  constructor(private productService: ProductService){}
  // removeProduct(productId: String) {
  //   alert('Xóa sản phẩm có id là ' + productId);
  //   const i = this.products.findIndex(product => product.id === productId)
  //   this.products.splice(i, 1);
  // }

  xacnhan(productId: String) {
    if (confirm('Xác nhận xóa')) {
      this.remove2(productId);
    }
  }

  remove2(productId: String) {
    this.products = this.products.filter((p) => p.id !== productId);
    let sum = 0;
    let totalPrice = 0;

    this.productService.calculatorAndEmiter();
  }

  change() {
    this.productService.calculatorAndEmiter();
  }
//   calculatorAndEmiter() {
//     let sum = 0;
//     let totalPrice = 0;

//     for (const item of this.products) {
//       sum += item.quantity;
//       totalPrice += item.quantity * item.price;
//     }
//     this.prodPrice.emit(totalPrice);
//     this.prodtotal.emit(sum);
//   }
}
