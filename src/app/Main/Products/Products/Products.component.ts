import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  counter: number = 0;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.counter = this.ds.getCount();
  }



}
