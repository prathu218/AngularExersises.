import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { myDirectiveDirective } from './myDirective.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    myDirectiveDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
