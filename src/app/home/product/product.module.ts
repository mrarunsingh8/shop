import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductSearchComponent, ProductListComponent, ProductDetailComponent]
})
export class ProductModule { }
