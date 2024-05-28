import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
import { UnsubscibeComponent } from './unsubscibe/unsubscibe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncObservableComponent,
    UnsubscibeComponent,
    AsyncPipeComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
