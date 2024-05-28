import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent {
  
  //Here we created a instance of FormControl class. Which keeps track of the behavior on the input feild.
 // usernameControl=new FormControl(); //This contains to parameters value and Validation status.
   //Now we can set the validaters to input field. ' ' For initial value.
   usernameControl =  new FormControl('',[
    Validators.required,
    Validators.maxLength(5)
   ])
  showValue(){
    console.log('value: ',this.usernameControl.value);
    console.log('Validation Status: ',this.usernameControl.valid); //by default true.
    console.log(this.usernameControl.errors);//Shows the error.
  }
}
