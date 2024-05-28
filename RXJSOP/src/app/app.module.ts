import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { MapComponent } from './map/map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    FromComponent,
    IntervalComponent,
    TimerComponent,
    MapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    MergeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
