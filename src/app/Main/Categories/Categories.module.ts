import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './Categories/Categories.component';
import { AddCategoryComponent } from './AddCategory/AddCategory.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'add',
        component: AddCategoryComponent
      }
    ])
  ],
  declarations: [CategoriesComponent, AddCategoryComponent]
})
export class CategoriesModule { }
