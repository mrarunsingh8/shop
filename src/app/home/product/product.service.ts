import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts(){
    return this.http.get<any>("../assets/data/products.data.json");
  }


}
