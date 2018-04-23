import {Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';

export const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule' }
];
