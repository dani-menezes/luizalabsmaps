import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MarkerComponent } from './components/marker/marker.component';
import { CustomRequestOptions } from './customRequestOptions';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZxSVFanbFGdmEirz5kQ2Oyaxr2xj1ZMY'
    })
  ],
  providers: [{ provide: RequestOptions, useClass: CustomRequestOptions }],
  bootstrap: [
    AppComponent,
    MarkerComponent
  ]
})
export class AppModule { }
