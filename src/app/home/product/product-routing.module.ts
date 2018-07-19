import { Routes } from '@angular/router';

import { ProductSearchComponent } from './product-search/product-search.component';
import {MainLayoutComponent} from "../../layout/main-layout/main-layout.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

export const productRoutes: Routes = [
    {path: "products", component: MainLayoutComponent, children: [
        {path:"", component: ProductListComponent}
      ]
    },
    {path: "search", component: MainLayoutComponent, children:[
        {path: "", component: ProductSearchComponent}
      ]
    },
    {path: "detail", component: MainLayoutComponent, children: [
        {path: "", component: ProductDetailComponent}
      ]
    }
];
