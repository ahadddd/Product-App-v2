import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from '../Vendors/Vendors/Vendors.component';
import { RouterModule } from '@angular/router';
import { AddVendorComponent } from './AddVendor/AddVendor.component';


@NgModule({
  imports: [
    CommonModule,
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
  declarations: [VendorsComponent]
})
export class VendorsModule { }
