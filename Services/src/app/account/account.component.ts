import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServices } from '../logging.services';
import { AccountsService } from '../accounts.services';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingServices]
})
export class AccountComponent {
  
  constructor(private loggingService:LoggingServices,private accountServices:AccountsService){

  }

  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
   // console.log('A server status changed, new status: ' + status);
   this.loggingService.loStatusChange(status)
   this.accountServices.updateStatus(this.id,status)
   
  }



}
