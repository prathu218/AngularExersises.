import { Component } from '@angular/core';

@Component({
  selector: 'server-component',
  templateUrl: './server-component.component.html',
  //styleUrls: ['./server-component.component.css']
  styles:[`.online{
    color:white;
  }`]
})
export class ServerComponent {

  ID:number=1001;
  ServerStatus:string='Offline'

  constructor(){
    this.ServerStatus=Math.random()>0.5?'online':'offline';
  }

  getServerStatus(){
    return this.ServerStatus
  }

  getColor(){
    return this.ServerStatus==='online'?"green":"red";
  }
}
