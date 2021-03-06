import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for HTTP requests

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // after BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
