import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  state=false;
  count = new Array();
  num:number=0;
   //demo:number[] = [];

  toggleText(){
    this.state=!this.state;
    this.num=this.num+1;
    this.count.push(this.num);
    //this.demo.push(this.demo.length+1);
    
  }

}
