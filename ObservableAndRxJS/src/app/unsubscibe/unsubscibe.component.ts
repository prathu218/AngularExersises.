import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unsubscibe',
  templateUrl: './unsubscibe.component.html',
  styleUrls: ['./unsubscibe.component.css']
})
export class UnsubscibeComponent {

  observable=new Observable<number>((observer)=>{
    let count=0;

   const interval= setInterval(()=>{
      observer.next(count++);
    },1000);
    return()=>{clearInterval(interval);}
    
  });

  constructor(){
   const subcription= this.observable.subscribe((data)=>{
     console.log(data);
    })

    setTimeout(()=>{
      subcription.unsubscribe();
      alert("End of Counter After 10 seconds.")
    },10000)
    
  }

}
