import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 【FormBuilder】
  constructor(private fb: FormBuilder){}
    userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      age: [''],
      email: [''],
      address: this.fb.group({
        address1: [''],
        address2: [''],
        city: [''],
        zip: [''],
    }),
     // 【FormArray】
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  });


  onSubmit() {
    console.warn(this.userForm.value);
    // console.warn(this.userForm.controls['firstName'].value);
    // console.warn(this.userForm.controls['address','address1'].value);
  }

  updatePartially(){
    this.userForm.patchValue({
      firstName: 'Jimmy',
      address: { address1: 'test address'}
    })
  }

  get mobiles(){
    return this.userForm.get('mobiles') as FormArray;
  }

  addNewMobile(){
    this.mobiles.push(this.fb.control(''))
  }
}
