import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../ProductData.service';
import { Product } from 'src/app/Models/product';
import { Vendor } from 'src/app/Models/vendor';
import { DataService } from '../../Vendors/Data.service';
import { Category } from 'src/app/Models/category';
import { CategoryDataService } from '../../Categories/CategoryData.service';

@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent implements OnInit {

  productData!: FormGroup;

  vendors: Array<Vendor> = [];
  categories: Array<Category> = [];

  constructor(private pds: ProductDataService, private vds: DataService, private cds: CategoryDataService) { }

  ngOnInit() {
    this.categories = this.cds.getData();
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
        category: this.getCategory()
      }
      this.pds.setProducts(p1);
      this.productData.reset();
      alert('Product Added.');
      console.log(this.pds.products);
      
    }

  }

  getCategory(): any {
    let name: any = this.productData.controls['category_id'].getRawValue();
    let found: any = '';
    this.categories.forEach((item) => {
      if (item.name == name) {
        found = item;
      }
    })
    if (found !== '') {
      return found;
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
    if (found !== '') {
      return found;
    }
  }


}
