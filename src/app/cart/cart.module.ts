import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
