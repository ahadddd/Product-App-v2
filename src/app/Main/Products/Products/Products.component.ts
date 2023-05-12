import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductDataService } from '../ProductData.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private pds: ProductDataService) { }

  ngOnInit() {
    this.products = this.pds.getProducts();
  }

  getProductsCategory() {

  }

}
