import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryDataService } from '../CategoryData.service';
@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = [];

  constructor(private cds: CategoryDataService) { }

  ngOnInit() {
    this.categories = this.cds.categories;
  }

}
