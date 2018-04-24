import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { BasketComponent } from './basket/basket.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutOrderReviewComponent } from './checkout-order-review/checkout-order-review.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [BasketComponent, CheckoutAddressComponent, CheckoutOrderReviewComponent]
})
export class CartModule { }
