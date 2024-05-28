import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputDecorator';
  Message:string="Hey This is Parent"
  //Message and courses are passed to the Child component using @Input Decorator
  //appComponent to input and assignment component
  courses:{id:number,name:string}[]=[{
    id:1,
    name:"Java"
  },
  {
    id:2,
    name:"JavaScript"
  }
];

 information:{name:string,phone:number,city:string}[]=[
  {
    name:"Prathamesh",
    phone:7666124600,
    city:"Satara"
  },
  {
    name:"Amol",
    phone:7666124600,
    city:"Nashik"
  },
  {
    name:"Raj",
    phone:7666124600,
    city:"Satara"
  }
 ]
}
