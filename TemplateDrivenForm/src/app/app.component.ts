import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  template:`
  <form #myForm=ngForm (ngSubmit)="onSubmit(myForm)">
  <div>
  <label for="name">Name:</label>
  <input type="text" name="name" [(ngModel)]="user" required/>
  </div>
  <div>
  <label for="email">Email:</label>
  <input type="text" name="email" [(ngModel)]="email" required/>
  </div>  
  <div>
  <label for="country">Country:</label>
  <select name="select" [(ngModel)]="selectedCountry">
  <option *ngFor="let country of countries" [value]="country.value">{{country.name}}</option>
  </select> 
  </div>
  <div>
  <label for="city">City:</label>
  <select name="select" [(ngModel)]="city">
  <option *ngFor="let city of getCitiesByCountry(selectedCountry)" [value]="city">{{city}}</option>
  </select> 
  </div>
  <button type="submit">Submit</button>
  </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';

  user:string=''
  email:string=''
  selectedCountry:string=''
  city:string=''

  countries=[
    {name:'USA',value:'usa'},
    {name:'Canada',value:'canada'},
    {name:'UK',value:'uk'},
  ]

  cities:{[key:string]:string[]}={
    usa:['New York','Los Angeles','Chicago'],
    canada:["C1","c2","c3"],
    uk:['u1','u2','u3']
  }

  getCitiesByCountry(country:string):string[]{
    return this.cities[country] || []
  }
  onSubmit(myForm:NgForm){
    console.log(myForm.value);
  }

}
