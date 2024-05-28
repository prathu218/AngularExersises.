import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  arr=from([1,2,3,3]);
  m:Map<number,string>=new Map([[1,'Hie'],[2,'how']])
  mapOb=from(this.m);

ngOnInit(): void {
  this.arr.subscribe(value=>console.log(value)) 
  this.mapOb.subscribe(data=>console.log(data))
  

}

}
