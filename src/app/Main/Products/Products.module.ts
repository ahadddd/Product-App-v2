import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { Router } from 'express';
import { AddProductComponent } from './AddProduct/AddProduct.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      }
    ])
  ],
  declarations: [ProductsComponent, AddProductComponent]
})
export class ProductsModule { }
