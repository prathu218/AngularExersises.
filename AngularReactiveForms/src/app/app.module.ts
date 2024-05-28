import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
@NgModule({
  declarations: [
    AppComponent,
    FormcontrolComponent,
    FormgroupComponent,
    FormArrayComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
