import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  products: Array<Product> = [
    {
      "id": 951,
      "name": "Crisps",
      "price": 2.99,
      "vendor": {
        "id": 1,
        "first_name": "Ahad",
        "last_name": "Shehbaz",
        "contact_number": 3335396805
      },
      "category": {
        "id": 32,
        "name": "Food",
        "status": "active"
      }
    },
    {
      "id": 548,
      "name": "Gatorade",
      "price": 5.6,
      "vendor": {
        "id": 2,
        "first_name": "Mustafa",
        "last_name": "Zafar",
        "contact_number": 3335394567
      },
      "category": {
        "id": 56,
        "name": "Drinks",
        "status": "active"
      }
    },
    {
      "id": 936,
      "name": "Jeans",
      "price": 50,
      "vendor": {
        "id": 3,
        "first_name": "Omar",
        "last_name": "Saeed",
        "contact_number": 3337890567
      },
      "category": {
        "id": 90,
        "name": "Clothes",
        "status": "active"
      }
    },
    {
      "id": 401,
      "name": "Bat",
      "price": 34.99,
      "vendor": {
        "id": 4,
        "first_name": "Hassan",
        "last_name": "Ahmed",
        "contact_number": 3331234567
      },
      "category": {
        "id": 81,
        "name": "Sports",
        "status": "active"
      }
    },
    {
      "id": 608,
      "name": "Runners",
      "price": 75.99,
      "vendor": {
        "id": 5,
        "first_name": "Abdul",
        "last_name": "Hadi",
        "contact_number": 3214567890
      },
      "category": {
        "id": 50,
        "name": "Footwear",
        "status": "active"
      }
    },
    {
      "id": 100,
      "name": "Ladder",
      "price": 25,
      "vendor": {
        "id": 6,
        "first_name": "Abdul",
        "last_name": "Munim",
        "contact_number": 3334445556
      },
      "category": {
        "id": 69,
        "name": "Hardware",
        "status": "active"
      }
    },
    {
      "id": 297,
      "name": "Blender",
      "price": 109,
      "vendor": {
        "id": 1,
        "first_name": "Ahad",
        "last_name": "Shehbaz",
        "contact_number": 3335396805
      },
      "category": {
        "id": 44,
        "name": "Electronics",
        "status": "active"
      }
    },
    {
      "id": 488,
      "name": "TV",
      "price": 500,
      "vendor": {
        "id": 3,
        "first_name": "Omar",
        "last_name": "Saeed",
        "contact_number": 3337890567
      },
      "category": {
        "id": 44,
        "name": "Electronics",
        "status": "active"
      }
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  setProducts(obj: Product) {
    this.products.push(obj);
  }

}
