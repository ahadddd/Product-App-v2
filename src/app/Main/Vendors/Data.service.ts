import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/Models/vendor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  vendors: Array<Vendor> = [];

  constructor() { }

  setVendors(obj: Vendor) {
    this.vendors.push(obj);
  }

  getVendors() {
    return this.vendors;
  }

}
