import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  values$=of(1,2,3,4,5);
  doubleValues$=this.values$.pipe(map((n)=>n*2));

  data:number[]=[];

  cursorPosition$?:Observable<{x:number,y:number}>;

  ngOnInit(): void {
    this.doubleValues$.subscribe((value)=>this.data.push(value));
    
    //fromEvent() emits the observable events registered through the target's listeners handlers.
    //It returns the observable that emits the event objects whenever the DOM events are fired.
    this.cursorPosition$=fromEvent<MouseEvent>(window,'mousemove')
    .pipe(
      map((event)=>({x:event.clientX,y:event.clientY}))
    )
  }

}
