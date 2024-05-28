import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent {
  myForm:FormGroup;

  constructor(){
    this.myForm=new FormGroup(
      {
        name:new FormControl('',Validators.required),
        email:new FormControl('',Validators.email),
        age: new FormControl('',Validators.min(18))
      }
    );
  }

  submitForm(){
    const userAge=this.myForm.get('age')?.value;
    if(userAge<18){
      alert('Age must be 18 or older');
      return;
    }
    else if(this.myForm.valid){
      console.log(this.myForm.value);
    }
  }
}
