import { Component } from '@angular/core';
import { of } from 'rxjs';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
 
  ofObservable=of({name:'prathamesh',Age:23},{name:'something',Age:24},[1,2,3,4],"Hello",function(){return "of can take multiple type values at a time."});
  Data:any;
  constructor(){
    
    
  }

  ngOnInit():void{
    console.log("Example of of() RxJS operator")
    this.ofObservable.subscribe(val=> this.Data=val)
  }
}
