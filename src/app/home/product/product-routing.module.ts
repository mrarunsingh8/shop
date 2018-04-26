import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSearchComponent } from './product-search/product-search.component';


export const routes: Routes = [
	{path: ':dynamic', component: ProductSearchComponent }
];