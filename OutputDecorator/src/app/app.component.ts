import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OutputDecorator';
  source:any;
  message:string=''
  getData(data:any){
    this.message=data;
  }

  reciveData(data:any){
    this.source=data
  }
}
