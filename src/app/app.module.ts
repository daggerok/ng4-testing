import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingService } from './common/greeting/greeting.service';
import { AsyncGreetingService } from './common/greeting/async-greeting.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    GreetingService,
    AsyncGreetingService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
