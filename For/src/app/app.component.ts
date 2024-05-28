import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For';
  numbers:number[] =[1,3,5]
  EvenNumbers:number[]=[2,4,6];
  odd=false;
  display:boolean=false;
  products=[
    {id:1,product:'Suger',price:40},
    {id:2,product:'Rice',price:80},
    {id:3,product:'Mug',price:70},
    {id:4,product:'Oreo',price:10},
  ]  

}
