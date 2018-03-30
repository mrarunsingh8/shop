import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '../layout/layout.module';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ],
  declarations: [HomeComponent, FaqComponent]
})
export class HomeModule { }
