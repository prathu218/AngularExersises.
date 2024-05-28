import { Component , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() myEvent=new EventEmitter();
   
  @Output() data=new EventEmitter()

  method(){
    this.myEvent.emit('Hey Parent This Message From Child')
  }

  post(){
    this.data.emit([
      {id:1,name:"prathamesh"},
      {id:2,name:"Anurag"},
      {id:3,name:"Ramesh"},
      {id:4,name:"Rohit"},
  
  ])
  }

}
