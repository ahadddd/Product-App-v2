import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './Categories/Categories.component';
import { AddCategoryComponent } from './AddCategory/AddCategory.component';

@NgModule({
  imports: [
    CommonModule,
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
  declarations: [CategoriesComponent]
})
export class CategoriesModule { }
