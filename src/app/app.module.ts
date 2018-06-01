import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for HTTP requests

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // after BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
