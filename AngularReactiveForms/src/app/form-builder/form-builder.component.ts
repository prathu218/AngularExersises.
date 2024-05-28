import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }

  get employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee(): void{
    const employeeGroup = this.fb.group({
      name: [''],
      job: [''],
    });
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
