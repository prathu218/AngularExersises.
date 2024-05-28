import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.css']
})
export class AsyncObservableComponent {
  observable = new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error(8);
    setTimeout(()=>{
      console.log("After Some Time");
      observer.next(4);
      observer.next(5);
      observer.complete();
    },4000)
  })

  //Initialization inside the constructor.
  constructor(){
    this.observable.subscribe({
      next(x){
        console.log(x);
      },
      complete(){
        console.log(" observable completed")
      }
    });
    console.log("After Subscribe")
  }
}
