import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';


import { BasketComponent } from './basket/basket.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutOrderReviewComponent } from './checkout-order-review/checkout-order-review.component';


const cartRoutes: Routes = [
	{path: 'cart', component: MainLayoutComponent, children: [
		{path: '', component: BasketComponent},
		{path: 'checkout-address', component: CheckoutAddressComponent},
		{path: 'checkout-order-review', component: CheckoutOrderReviewComponent }
	]},
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
  declarations: [ BasketComponent, CheckoutAddressComponent, CheckoutOrderReviewComponent]
})
export class CartRoutingModule { }
