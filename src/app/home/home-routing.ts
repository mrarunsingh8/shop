import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent} from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const homeRoutes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
  	{path: '', component: HomeComponent},
  	{path: 'faq', component: FaqComponent},
  	{path: 'about-us', component: AboutUsComponent},
  	{path: 'contact-us', component: ContactUsComponent}
  ]},
];