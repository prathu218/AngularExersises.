import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{
  msg:string='';
  obs=interval(1000)
  data:any;
  ngOnInit(): void {
    const subscription=this.obs.subscribe(val=>this.data=val)
   // this.obs.subscribe(val=>console.log(val))

   setTimeout(()=>{
    subscription.unsubscribe();
    this.msg="Time-Out!!"
   },10000)
    
  }
}

//Can be used as 
/*
1.Scheduling events.
2.Generating events.
3.Task scheduler/Reminders.
4.Updating a state
5.Managing animations etc.
*/