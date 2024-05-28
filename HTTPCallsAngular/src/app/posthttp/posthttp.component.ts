import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posthttp',
  templateUrl: './posthttp.component.html',
  styleUrls: ['./posthttp.component.css']
})
export class PosthttpComponent {

   user={
    id:102,
    name:'PRathamesh',
    email:'pratham@gmail.com'
  }

  user1={
    id:104,
    name:'Observable',
    email:'obs@gmail.com'
  }
  response$:any;
  success:boolean=false;
  constructor(private http:HttpClient){}
  
  postData()/*:Observable<any>*/{
    this.http.post('http://localhost:3000/users',this.user1).subscribe(
      (response)=>{
        console.log('User updated: ',response)
        this.success=true;
      }
    )
    //this.success=true;
    //return this.http.post('http://localhost:3000/users',this.user)
    

  }
}

