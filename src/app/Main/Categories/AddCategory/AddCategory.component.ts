import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryDataService } from '../CategoryData.service';

@Component({
  selector: 'app-AddCategory',
  templateUrl: './AddCategory.component.html',
  styleUrls: ['./AddCategory.component.css']
})
export class AddCategoryComponent implements OnInit {

  catData!: FormGroup;

  constructor(private cds: CategoryDataService) { }

  ngOnInit() {
    this.catData = new FormGroup({
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  saveCategory() {
    if (this.catData.invalid) {
      alert('Invalid Data provided.');
      console.log(this.catData);
      
    }
    else {
      let ctrl = this.catData.controls;
      let c1: Category = {
        id: Math.floor(Math.random() * 100),
        name: ctrl['name'].getRawValue(),
        status: ctrl['status'].getRawValue()
      }
      this.cds.setData(c1);
      alert('Category Added.');
      this.catData.reset();
      console.log(this.cds.categories);
      
    }

  }

}
