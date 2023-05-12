import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vendor } from 'src/app/Models/vendor';
import { DataService } from '../Data.service';

@Component({
  selector: 'app-AddVendor',
  templateUrl: './AddVendor.component.html',
  styleUrls: ['./AddVendor.component.css']
})
export class AddVendorComponent implements OnInit {

  // vendors: Array<Vendor> = [];
  venData!: FormGroup;

  constructor(private ds: DataService ) { }

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
        id: this.ds.vendors.length + 1,
        first_name: ctrl['f_name'].getRawValue(),
        last_name: ctrl['l_name'].getRawValue(),
        contact_number: ctrl['c_number'].getRawValue()
      }
      this.ds.setVendors(v1);
      alert('Vendor Added.');
      this.venData.reset();
      console.log(this.ds.vendors);
    }
    
  }

}
