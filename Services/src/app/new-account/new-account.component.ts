import { Component} from '@angular/core';
import { LoggingServices } from '../logging.services';
import { AccountsService } from '../accounts.services';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingServices]
})
export class NewAccountComponent {

  constructor(private loggingServices:LoggingServices,private accountServices:AccountsService){}

  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.accountServices.addAccount(accountName,accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
    this.loggingServices.loStatusChange(accountStatus)
  }

}
