import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit {
  title = 'Services';
  accounts: { name: string, status:string }[]=[];
  constructor(private accountsServices:AccountsService){}

  ngOnInit(): void {
    this.accounts=this.accountsServices.accounts;
  }
 /* accounts = [
    {
      name: 'Prathamesh Hajare',
      status: 'active'
    },
    {
      name: 'Shreya Jadhav',
      status: 'Inactive'
    },
    {
      name: 'Shradha Kapoor',
      status: 'unknown'
    }
  ];*/

  

 /* onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }*/
}
