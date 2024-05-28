import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gethttp',
  templateUrl: './gethttp.component.html',
  styleUrls: ['./gethttp.component.css']
})
export class GethttpComponent {

  response$:Observable<any> | undefined
    display:boolean=false
  constructor(private service:HttpClient){
  
  }
  getData(){
     this.response$=this.service.get('http://jsonplaceholder.typicode.com/users')
        this.display=!this.display  
  }

}
