import { Component, OnInit } from '@angular/core';
import { concatMap, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  //switchMap() operators works just like the concatMap() operator.
  
  source$=of(1,2,3);
  
  finalSwitch$=this.source$.pipe(
    /*concatMap((val)=>{
      console.log('source value: ',val)
      console.log('Starting new observable');
      return interval(1000).pipe(take(3)); //return a new inner observable.
      //Here the take() operator emmited observable values that are 3 i.e count.

    })*/

    switchMap((val)=>{
      console.log('source value: ',val)
      console.log('Starting new observable');
      return interval(1000).pipe(take(3)); //return a new inner observable.
      //Here the take() operator emmited observable values that are 3 i.e count.

    })

  )
    
  ngOnInit(): void {
    this.finalSwitch$.subscribe(val=>console.log(val))
  }

}
