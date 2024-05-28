import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GethttpComponent } from './gethttp/gethttp.component';
import { PosthttpComponent } from './posthttp/posthttp.component';
import { PuthttpComponent } from './puthttp/puthttp.component';
import { DeletehttpComponent } from './deletehttp/deletehttp.component';

@NgModule({
  declarations: [
    AppComponent,
    GethttpComponent,
    PosthttpComponent,
    PuthttpComponent,
    DeletehttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
