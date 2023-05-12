import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductDataService } from '../ProductData.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  modal: boolean = false;
  products: Array<Product> = [];
  searchID: any;

  constructor(private pds: ProductDataService) { }

  ngOnInit() {
    this.products = this.pds.getProducts();
  }

  reset() {
    this.products = [];
    this.products = this.pds.products;
  }

  searchByID() {
    let found: boolean = false;
    if(this.modal){
      console.log(this.searchID);
      this.products.forEach((item) => {
        if(item.id == this.searchID) {
          this.products = [];
          this.products.push(item);
          found = true;
        }
      })
      if(found){
        this.modal = !this.modal;
      }
      else{
        alert('Product not found.')
      }
    }
    else{
      this.modal = !this.modal;
    }
  }

  getProductsCategory() {

  }

}
