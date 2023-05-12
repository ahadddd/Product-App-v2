import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  increment() {
    this.ds.counter++;
  }



}
