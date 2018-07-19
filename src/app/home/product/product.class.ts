import {ProductService} from "./product.service";

export interface ProductListInterface {
  name: string;
  smallDetail: string;
  amount: number;
  isSale: boolean;
  isNew: boolean;
  listImage: { front : string, rear: string};
  images: Array<{main: string, thumb: string}>;
  detail: string;
  Material_care: Array<string>;
  sizeFit: Array<string>;
  note: string;
}

export class ProductsClass{
  productList: ProductListInterface;
  constructor(){

  }
  set setProductList(data: ProductListInterface){
    this.productList = data;
  }
  getProductList(): ProductListInterface{
    return this.productList;
  }

}
