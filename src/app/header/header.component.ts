import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input() totalItems: number;

  // constructor(private productService: ProductService){
  //   this.productService.calculatorAndEmiter()
  //   this.totalItems= this.productService.totalItems;
  // }



}
