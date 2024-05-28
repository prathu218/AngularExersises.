export class AccountsService{
    accounts=[
        {
            name: 'Prathamesh Hajare',
            status: 'active'
          },
          {
            name: 'Shreya Jadhav',
            status: 'inactive'
          },
          {
            name: 'Shradha Kapoor',
            status: 'unknown'
          }
    ]

    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status})
    }

    updateStatus(id:number,status:string){
        this.accounts[id].status = status;
    }
}