import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  employeeForm:FormGroup
  constructor(){
    this.employeeForm=new FormGroup({
      
      employees:new FormArray([
        
      ]),

    });
  }

  get employees():FormArray{
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee() : void{
    const employeeGroup=new FormGroup({
      name:new FormControl(''),
      job:new FormControl('')
    })
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
