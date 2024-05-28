


import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObservableAndRxJS';

  constructor(){
    const observable=new Observable(()=>{
      console.log("Observable Executed...")
    }).subscribe()  //Here Subscribe method is used to execute the observable.
  }

//'observer' is argument which keep track of the values that are emitted from the observable.
//Can be named anything,but generaly 'subscriber/observer' is used.
//next() error() complete().
   obervable2=new Observable((observer)=>{
    //When we want to provide a meaningfull data to the subscribers,we use the next().
    observer.next("Hello next() method here."); //emitted value here 
   // observer.error('An error occureds');;//
    observer.complete();//Explicity defines that observable has finished emitting the values and is now completed.

  }).subscribe({
    next(value){
      console.log("Recieved value is : ",value)
    },
   /* error(err){
      console.log(err);
    },*/
    complete() {
      console.log("Observable Completed..")
    },
  }
  );
}
