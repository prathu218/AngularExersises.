import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
 
  @Input() Recieve:{id:number,name:string}[]=[];

  @Input() getData:{name:string,phone:number,city:string}[]=[];
  

  
}
