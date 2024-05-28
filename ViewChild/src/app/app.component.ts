import { Component , ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('ref') childComponent?:ChildComponent

  greetChild(){
    if(this.childComponent){
      this.childComponent.sayHi();
    }
  }


}
