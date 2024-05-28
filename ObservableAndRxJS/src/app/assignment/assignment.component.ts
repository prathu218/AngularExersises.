import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  jsonData$:Observable<any>|undefined;

  constructor(){
    this.fetchData();
  }

  fetchData(){
    this.jsonData$=new Observable((observer)=>{
      fetch('https://dummyjson.com/products/categories')
      .then(response=>response.json())
      .then((data)=>{
        observer.next(data);
        observer.complete();
      })
      .catch(err=> observer.error(err));

    })
  }

}
