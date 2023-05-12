import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Models/vendor';

@Component({
  selector: 'app-Vendors',
  templateUrl: './Vendors.component.html',
  styleUrls: ['./Vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: Array<Vendor> = []
  constructor() { }

  ngOnInit() {
  }

}
