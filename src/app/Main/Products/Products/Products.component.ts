import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductDataService } from '../ProductData.service';
import { Category } from 'src/app/Models/category';
import { CategoryDataService } from '../../Categories/CategoryData.service';
import { Vendor } from 'src/app/Models/vendor';
import { DataService } from '../../Vendors/Data.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  IDmodal: boolean = false;
  categoryModal: boolean = false;
  vendorModal: boolean = false;
  priceModal: boolean = false;
  products: Array<Product> = [];
  searchID: any;
  searchCategory: any;
  searchVendor: any;
  categories: Array<Category> = [];
  vendors: Array<Vendor> = [];
  priceFilter: number = 0;

  constructor(private pds: ProductDataService, private cds: CategoryDataService, private vds: DataService) { }

  ngOnInit() {
    this.products = this.pds.getProducts();
    this.categories = this.cds.getData();
    this.vendors = this.vds.getVendors();
  }

  reset() {
    this.products = [];
    this.products = this.pds.products;
  }

  searchByID() {
    let found: boolean = false;
    if (this.IDmodal) {
      console.log(this.searchID);
      this.products.forEach((item) => {
        if (item.id == this.searchID) {
          this.products = [];
          this.products.push(item);
          found = true;
        }
      })
      if (found) {
        this.IDmodal = !this.IDmodal;
      }
      else {
        alert('Product not found.')
      }
    }
    else {
      this.IDmodal = !this.IDmodal;
    }
  }

  getProductsCategory() {
    let items: any = [];
    if (this.categoryModal) {
      // this.categoryModal = true;
      console.log(this.searchCategory);
      this.categoryModal = !this.categoryModal;
      this.products.forEach((item) => {
        if (item.category.id == this.searchCategory) {
          items.push(item);
        }
      })
      console.log(items);
      if (items.length == 0) {
        alert('No items found for seleted category.')
      }
      else {
        this.products = items;
      }
    }
    else {
      this.categoryModal = !this.categoryModal;
    }
  }

  getProductVendor() {
    let items: any = [];
    if (this.vendorModal) {
      console.log(this.searchVendor);
      this.vendorModal = !this.vendorModal;
      this.products.forEach((item) => {
        if (item.vendor.id == this.searchVendor) {
          items.push(item);
        }
      })
      if (items.length == 0) {
        alert('No items found against Vendor.')
      }
      else {
        this.products = items;
        console.log(this.products);
      }
    }
    else {
      this.vendorModal = !this.vendorModal;
    }
  }

  setPriceFilter() {
    let items: any = [];
    if (this.priceModal) {
      console.log(this.priceFilter);
      this.products.forEach((item) => {
        if (item.price <= this.priceFilter) {
          items.push(item);
        }
      })
      if (items.length == 0) {
        alert('No products found against price filter.')
      }
      else {
        this.products = items;
        this.priceModal = !this.priceModal
      }
    }
    else {
      this.priceModal = !this.priceModal;
    }
  }
}
