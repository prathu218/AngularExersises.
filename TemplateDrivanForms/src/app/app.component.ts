import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivanForms';
 value:any
  

  formSubmit(myForm:NgForm){
    if(myForm.valid){
      //const formValues=JSON.stringify(myForm.value);
      const formValues=myForm.value
      this.value=formValues
      console.log(formValues);
      console.log('%c Form submitted successfully','color:green;font-weight:400;font-size:15px;')
    }
    else{
      alert("please fill the input fields")
    }
  }

  resetValue(myForm:NgForm){
    myForm.resetForm();
    this.value=''
  }

  setDefault(myForm:NgForm){
    myForm.resetForm({
      name:'Default Name',
      email:'Default21@gmail.com'
    })
  }

}
