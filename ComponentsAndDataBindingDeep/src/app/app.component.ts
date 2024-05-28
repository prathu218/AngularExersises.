import { Component } from '@angular/core';
//import { Component1Component } from './component1/component1.component';
@Component({
  selector: 'app-root',
 // imports:[Component1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentsAndDataBindingDeep';
  //serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}];
  serverElements=[{type:'server',name:'Testserver',content:'just s test!'}];
  type='blueprint'
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintdata:{ServerName:string,ServerContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name: blueprintdata.ServerName,
      content:blueprintdata.ServerContent
 
    })
  }
}
