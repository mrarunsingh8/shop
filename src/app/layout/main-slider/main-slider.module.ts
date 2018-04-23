import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainSliderComponent],
  exports: [MainSliderComponent]
})
export class MainSliderModule { }
