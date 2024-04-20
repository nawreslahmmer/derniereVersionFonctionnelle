import { SignupComponent } from './signup/signup.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { GereFleuristeComponent } from './gere-fleuriste/gere-fleuriste.component';
import { AjoutFleuristeComponent } from './ajout-fleuriste/ajout-fleuriste.component';
import { ModifierFleuristComponent } from './modifier-fleurist/modifier-fleurist.component';
import { HomeComponent } from './interfaceAdmin/home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';



export const appRoutes: Routes = [
  { path: '', component:AuthentificationComponent  },
  {path: "HomeAdmin", component:HomeComponent },
  {path: "signup", component:SignupComponent },
  { path: "ajout-fleuriste", component: AjoutFleuristeComponent },
  {path:"modifier-fleurist",component: ModifierFleuristComponent},
  {path:"GereFleuriste",component:GereFleuristeComponent},
  { path: 'signup', component: SignupComponent}
];

