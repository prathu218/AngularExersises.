import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  outerObservable$=from([1,2,3,4,5])
  innerObservable$=(value:number)=>of(value *2)
  Data:any[]=[];
  flatternObervable$=this.outerObservable$.pipe(
    mergeMap(this.innerObservable$)
  )
  ngOnInit(): void {
    this.flatternObervable$.subscribe(value=>console.log(value))

    from(this.users)
    .pipe(
      mergeMap((user) => {
        const courseData = this.courses.filter(
        
        (course) => course.courseId === user.id
        
        );
        
        return of({user, courses: courseData});
      })
    )
    .subscribe((res) => {
     // this.Data.push(res.user.name)
     
      //this.Data.push(res.user.id)
      console.log('Combined User & Courses: ', res);
    });
  }

  //Assignment using merge map

  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  courses = [
    { courseId: 1,
      title: 'JavaScript - Marathon Interview Questions Series' 
    },
    {
      courseId: 2,
      title: 'Mastering React With Interview Questions,eStore Project',
    },
    {
      courseId: 1,
      title: 'Mastering TypeScript with Marathon Interview Questions',
    },
    {
      courseId: 3,
      title: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
    },
    {
      courseId: 3,
      title: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
    },
  ];



}
