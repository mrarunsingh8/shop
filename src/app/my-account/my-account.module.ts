import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {MainLayoutComponent} from './../layout/main-layout/main-layout.component';


import { OrdersComponent } from './orders/orders.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


const routes: Routes = [
	{path: 'my-account', component: MainLayoutComponent, children: [
		{path: '', component: DashboardComponent},
		{path: 'orders', component: OrdersComponent},
		{path: 'wishlist', component: WishListComponent},
		{path: 'update-profile', component: UpdateProfileComponent},
		{path: 'change-password', component: ChangePasswordComponent},
	]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OrdersComponent, WishListComponent, DashboardComponent, ChangePasswordComponent, UpdateProfileComponent, SideMenuComponent]
})
export class MyAccountModule { }