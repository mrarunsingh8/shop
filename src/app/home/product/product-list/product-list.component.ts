import { Component, OnInit } from '@angular/core';
import {ProductListInterface, ProductsClass} from "../product.class";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productModal: ProductsClass;
  productData?: ProductListInterface;

  constructor(private productService: ProductService) {
    this.productModal = new ProductsClass();
  }

  ngOnInit() {

    this.productService.getProducts().subscribe((res: ProductListInterface)=>{
      this.productData = res;

    });

  }

}
