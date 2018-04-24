import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { homeRoutes } from './home-routing';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { FaqComponent } from './faq/faq.component';

import { MainSliderModule } from './../app-directive/main-slider/main-slider.module';
import { ProductSliderModule } from './../app-directive/product-slider/product-slider.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    LayoutModule,
    MainSliderModule,
    ProductSliderModule
  ],
  declarations: [HomeComponent, FaqComponent, AboutUsComponent, ContactUsComponent]
})
export class HomeModule { }
