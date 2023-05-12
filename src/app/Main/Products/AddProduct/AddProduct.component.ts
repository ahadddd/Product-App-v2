import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../ProductData.service';
import { Product } from 'src/app/Models/product';
import { Vendor } from 'src/app/Models/vendor';
import { DataService } from '../../Vendors/Data.service';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent implements OnInit {

  productData!: FormGroup;

  vendors: Array<Vendor> = [];

  constructor(private pds: ProductDataService, private vds: DataService) { }

  ngOnInit() {
    this.vendors = this.vds.getVendors();
    this.productData = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      vendor_id: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required)
    })
  }

  saveProduct() {
    if (this.productData.invalid) {
      alert('Invalid Data Provided.');
    }
    else {
      let ctrl = this.productData.controls;
      let p1: Product = {
        id: Math.floor(Math.random() * 999),
        name: ctrl['name'].getRawValue(),
        price: ctrl['price'].getRawValue(),
        vendor: this.getVendor(),
        category: ctrl['category_id'].getRawValue()
      }
      this.pds.setProducts(p1);
      alert('Product Added.');
    }

  }

  getVendor(): any {
    let id: any = this.productData.controls['vendor_id'].getRawValue();
    let found: any = '';
    this.vendors.forEach((item) => {
      if (item.id == id) {
        found = item;
      }
    })
    if (found !== undefined) {
      return found;
    }
  }


}
