import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  products: Array<Product> = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

  setProducts(obj: Product) {
    this.products.push(obj);
  }

}
