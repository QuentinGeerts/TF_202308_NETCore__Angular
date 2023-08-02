import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { DemosComponent } from './demos/demos.component';

import { ExercicesComponent } from './exercices/exercices.component';
import { Exercice01Component } from './exercices/exercice01/exercice01.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ExercicesComponent,
    Demo01Component,
    Exercice01Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Important pour le fonctionnement du routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
