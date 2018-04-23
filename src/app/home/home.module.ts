import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { FaqComponent } from './faq/faq.component';

import { MainSliderModule } from './../layout/main-slider/main-slider.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MainSliderModule
  ],
  declarations: [HomeComponent, FaqComponent]
})
export class HomeModule { }
