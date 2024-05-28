import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  /* convention in Angular & RxJS. Indicates that the property holds an Observable. */
  value$:Observable<number>;

  constructor(){
    this.value$=new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.complete();
      },4000)
    })
  }

}
