import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from './product-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductSliderComponent],
  exports: [ ProductSliderComponent ]
})
export class ProductSliderModule { }
