import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HomeModule} from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { CartModule } from './cart/cart.module';
import { MyAccountModule } from './my-account/my-account.module';

import {LayoutModule} from './layout/layout.module';
import {ProductModule} from "./home/product/product.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    HomeModule,
    BlogModule,
    CartModule,
    MyAccountModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
