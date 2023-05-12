import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Models/vendor';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-Vendors',
  templateUrl: './Vendors.component.html',
  styleUrls: ['./Vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: Array<Vendor> = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.vendors = this.ds.getVendors()
  }

}
