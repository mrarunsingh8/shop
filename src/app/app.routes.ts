import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


export const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule' },
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
  {path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountModule'},

  {path: '404-error', component: PageNotFoundComponent },
  {path: '**', redirectTo: '404-error'}
];
