import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from '../Vendors/Vendors/Vendors.component';
import { RouterModule } from '@angular/router';
import { AddVendorComponent } from './AddVendor/AddVendor.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: VendorsComponent
      },
      {
        path: 'add',
        component: AddVendorComponent
      }
    ])
  ],
  declarations: [VendorsComponent, AddVendorComponent]
})
export class VendorsModule { }
