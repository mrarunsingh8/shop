import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {productRoutes} from "./product-routing.module";
import {ProductService} from "./product.service";


import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductSearchComponent, ProductListComponent, ProductDetailComponent],
  providers: [ProductService]
})
export class ProductModule { }
