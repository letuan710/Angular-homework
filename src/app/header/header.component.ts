import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
   constructor(private productService:ProductService){

   }
   getTotalItem(): number {
    return this.productService.getTotalItems();
  }

  // constructor(private productService: ProductService){
  //   this.productService.calculatorAndEmiter()
  //   this.totalItems= this.productService.totalItems;
  // }



}
