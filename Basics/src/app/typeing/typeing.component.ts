import { Component } from '@angular/core';

@Component({
  selector: 'app-typeing',
  templateUrl: './typeing.component.html',
  styleUrls: ['./typeing.component.css']
})
export class TypeingComponent {
  text:string='';
  Finaltext:string=''

  message(event:any){
   this.text=(<HTMLInputElement>event.target).value;
   }
   submit(){
     this.Finaltext=this.text;
     this.text=''
          
   }

}
