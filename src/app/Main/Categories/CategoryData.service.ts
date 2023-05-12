import { Injectable } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  categories: Array<Category> = [
    {
      "id": 32,
      "name": "Food",
      "status": "active"
    },
    {
      "id": 90,
      "name": "Clothes",
      "status": "active"
    },
    {
      "id": 81,
      "name": "Sports",
      "status": "active"
    },
    {
      "id": 50,
      "name": "Footwear",
      "status": "active"
    }
  ]

  constructor() { }

  setData(obj: Category) {
    this.categories.push(obj);
  }

  getData() {
    return this.categories;
  }

}
