import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server-component';
import { Server2Component } from './server2/server2.component';
import { AlertsComponent } from './alerts/alerts.component';
import { WarningsComponent } from './warnings/warnings.component';
import { TypeingComponent } from './typeing/typeing.component';
import { UsernameComponent } from './username/username.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    AlertsComponent,
    WarningsComponent,
    TypeingComponent,
    UsernameComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
