import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  state:boolean=false;
  userName:string=''
  text="UserName"
  

  disable(){
    this.state=true
  }
  display(){

   this.text=this.userName
    
  }

}
