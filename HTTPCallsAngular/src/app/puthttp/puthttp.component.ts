import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puthttp',
  templateUrl: './puthttp.component.html',
  styleUrls: ['./puthttp.component.css']
})
export class PuthttpComponent {

  constructor(private http:HttpClient){}
 
   putData(){
    const user={
      id:106,
      name:'Six',
      email:'six@gmail.com'
    }
     this.http.put('http://localhost:3000/users/'+user.id,user).subscribe(
        (responese)=>{
          console.log("user updated ",responese)
        }
     )
   }
}
