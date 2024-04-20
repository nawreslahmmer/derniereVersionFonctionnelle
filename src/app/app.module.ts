import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; 
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './interfaceAdmin/home/home.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HomeComponent,
    SignupComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
    RouterModule.forRoot([]) ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
