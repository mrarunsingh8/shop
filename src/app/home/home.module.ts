import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { FaqComponent } from './faq/faq.component';

import { MainSliderModule } from './../app-directive/main-slider/main-slider.module';
import { ProductSliderModule } from './../app-directive/product-slider/product-slider.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MainSliderModule,
    ProductSliderModule
  ],
  declarations: [HomeComponent, FaqComponent]
})
export class HomeModule { }
