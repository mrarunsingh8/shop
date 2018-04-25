import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TopHeaderComponent} from './top-header/top-header.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {MainFooterComponent} from './main-footer/main-footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MegaMenuHeaderDirective } from './nav-header/mega-menu-header.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopHeaderComponent,
    NavHeaderComponent,
    MainFooterComponent,
    MainLayoutComponent,
    PageNotFoundComponent,
    MegaMenuHeaderDirective
  ],
  exports: [
    TopHeaderComponent,
    NavHeaderComponent,
    MainFooterComponent,
    MainLayoutComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule { }
