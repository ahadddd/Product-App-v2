import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor() { }

  ngOnInit() {
  }

}
