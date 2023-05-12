import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/Models/vendor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  vendors: Array<Vendor> = [
    {
      "id": 1,
      "first_name": "Ahad",
      "last_name": "Shehbaz",
      "contact_number": 3335396805
    },
    {
      "id": 2,
      "first_name": "Mustafa",
      "last_name": "Zafar",
      "contact_number": 3335394567
    },
    {
      "id": 3,
      "first_name": "Omar",
      "last_name": "Saeed",
      "contact_number": 3337890567
    },
    {
      "id": 4,
      "first_name": "Hassan",
      "last_name": "Ahmed",
      "contact_number": 3331234567
    },
    {
      "id": 5,
      "first_name": "Abdul",
      "last_name": "Hadi",
      "contact_number": 3214567890
    },
    {
      "id": 6,
      "first_name": "Abdul",
      "last_name": "Munim",
      "contact_number": 3334445556
    }
  ];

  constructor() { }

  setVendors(obj: Vendor) {
    this.vendors.push(obj);
  }

  getVendors() {
    return this.vendors;
  }

}
