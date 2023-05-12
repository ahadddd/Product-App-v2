import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vendor } from 'src/app/Models/vendor';

@Component({
  selector: 'app-AddVendor',
  templateUrl: './AddVendor.component.html',
  styleUrls: ['./AddVendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendors: Array<Vendor> = [];
  venData!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.venData = new FormGroup({
      f_name: new FormControl('', Validators.required),
      l_name: new FormControl('', Validators.required),
      c_number: new FormControl('', Validators.required)
    })
  }

  save() {
    if(this.venData.invalid) {
      alert('Invalid Data.')
    }
    else{
      let ctrl = this.venData.controls;
      let v1: Vendor = {
        id: this.vendors.length + 1,
        first_name: ctrl['f_name'].getRawValue(),
        last_name: ctrl['l_name'].getRawValue(),
        contact_number: ctrl['c_number'].getRawValue()
      }
      this.vendors.push(v1);
      console.log(this.vendors);
      alert('Vendor Added.')
      
    }
    
    
  }

}
