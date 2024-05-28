import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  //serverElements:{type:string,name:string,content:string}[]=[];
  //serverElements=[]
  newServerName: string='';
  newServerContent:string='';
  //type='blueprint'
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{ServerName:string,ServerContent:string}>();

 onAddServer(){
  this.serverCreated.emit({
    serverName:this.newServerName,
    serverContent:this.newServerContent
  });
 }

 onAddBlueprint(){
  this.serverCreated.emit({
    //type:'blueprint',
    
    serverName:this.newServerName,
    serverContent:this.newServerContent
  });
 }


  

}
