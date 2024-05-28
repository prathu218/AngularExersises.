import { Component, Inject } from '@angular/core';
import { Logservice1Service } from './services/logservice1.service';
import { Logservice2Service } from './services/logservice2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tokens';

  constructor(
    @Inject('token') //Constructor parameter which is used for specifying custome providers or dependencies.
    private service1:Logservice1Service)
  {
    this.service1.log();
    

  }
}
