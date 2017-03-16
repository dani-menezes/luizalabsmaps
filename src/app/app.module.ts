import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MarkerComponent } from './components/marker/marker.component';
import { MarkerFormComponent } from './components/marker/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    MarkerFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZxSVFanbFGdmEirz5kQ2Oyaxr2xj1ZMY'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MarkerComponent,
    MarkerFormComponent
  ]
})
export class AppModule { }
