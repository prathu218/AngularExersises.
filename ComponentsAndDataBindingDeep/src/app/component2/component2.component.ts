import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

 //@Input() element:{type:string,name:string,content:string}[]=[]
  @Input() element!: { type: string, name: string, content: string};
  
}
