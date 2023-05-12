import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = []

  constructor() { }

  ngOnInit() {
  }

}
