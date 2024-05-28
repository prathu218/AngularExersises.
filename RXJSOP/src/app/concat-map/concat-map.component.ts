import { Component, OnInit } from '@angular/core';
import { concatMap, map, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  srcObservable$=of(1,2,3);
  innerObservable$=of('A','B','C');

  concatArray:any[]=[];

  finalConcatMap$=this.srcObservable$.pipe(
    concatMap((val)=>{
      this.concatArray.push(val)
      console.log('source value : ',val)
      console.log('Starting new Observable : ')
      return this.innerObservable$;
    })
  )

  ngOnInit(): void {
    this.finalConcatMap$.subscribe((val)=>{
      this.concatArray.push(val)
      console.log('inner values',val)
    })
  }


}
