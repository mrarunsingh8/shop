import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopHeaderComponent} from './top-header/top-header.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {MainFooterComponent} from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopHeaderComponent,
    NavHeaderComponent,
    MainFooterComponent
  ],
  exports: [
    TopHeaderComponent,
    NavHeaderComponent,
    MainFooterComponent
  ]
})
export class LayoutModule { }
