import { Component } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component {

  allowUser:boolean=false;
  status:string="No server Created "
  serverName:string=''
  serverCreationState=false

  constructor(){ 
    setTimeout(()=>{
      this.allowUser=true
    },2000)
  }
 
   ServerCreated(){
    this.serverCreationState=true;
    this.status='Server Created! Name is '+this.serverName

   }
   
   ServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value

   }

}
