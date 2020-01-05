import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiniCalendarModule } from 'mini-calendar';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { ResultsComponent } from './results/results.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    View1Component,
    View2Component,
    ResultsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MiniCalendarModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyCo5eHkeqhurDSk1LwGLQk0D2YUI8pbKhM'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
