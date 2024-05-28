import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Logservice1Service } from './services/logservice1.service';
import { Logservice2Service } from './services/logservice2.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    /*Type of Token= Type Token*/
    // {provide:Logservice1Service,useClass:Logservice1Service},
    //{provide:Logservice1Service,useClass:Logservice2Service}

    /*String token*/
    {provide:'token',useClass:Logservice2Service}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
