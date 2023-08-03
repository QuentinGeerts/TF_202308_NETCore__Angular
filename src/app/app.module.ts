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
import { Demo05Component } from './demos/demo05/demo05.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { Exercice05Component } from './exercices/exercice05/exercice05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { SecondsToDHMSPipe } from './shared/pipes/seconds-to-dhms.pipe';
import { GetFormateurPipe } from './shared/pipes/get-formateur.pipe';
import { ReducePipe } from './shared/pipes/reduce.pipe';


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
    Demo05Component,
    NavbarComponent,
    NotFoundComponent,
    Exercice05Component,
    Demo06Component,
    Demo07Component,
    SecondsToDHMSPipe,
    GetFormateurPipe,
    ReducePipe,
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
