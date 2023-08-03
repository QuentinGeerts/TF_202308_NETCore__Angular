import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { DemosComponent } from './demos/demos.component';

import { FormsModule } from '@angular/forms';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Exercice01Component } from './exercices/exercice01/exercice01.component';
import { Exercice02Component } from './exercices/exercice02/exercice02.component';
import { Exercice03Component } from './exercices/exercice03/exercice03.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exercice04Component } from './exercices/exercice04/exercice04.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ExercicesComponent,
    Demo01Component,
    Exercice01Component,
    Demo02Component,
    Exercice02Component,
    Demo03Component,
    Exercice03Component,
    Demo04Component,
    Exercice04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Important pour le fonctionnement du routing
    FormsModule, // Important pour le fonctionnement du Two-Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
