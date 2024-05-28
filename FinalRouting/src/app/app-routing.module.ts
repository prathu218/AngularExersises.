import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'works/:name',component:WorkComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'feedback',component:FeedbackComponent},
  //{path:'**',component:PagenotfoundComponent},
  //{path:'**',redirectTo:'home'}
  //{path:'feedback',component:FeedbackComponent,children:[{path:'',component:}]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
