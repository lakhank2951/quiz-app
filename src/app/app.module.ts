import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CountdownModule 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
