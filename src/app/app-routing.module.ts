import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { DemosComponent } from './demos/demos.component';

import { Exercice01Component } from './exercices/exercice01/exercice01.component';
import { Exercice02Component } from './exercices/exercice02/exercice02.component';
import { Exercice03Component } from './exercices/exercice03/exercice03.component';
import { Exercice04Component } from './exercices/exercice04/exercice04.component';
import { Exercice05Component } from './exercices/exercice05/exercice05.component';
import { ExercicesComponent } from './exercices/exercices.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
    ]
  },

  {
    path: 'exercices', children: [
      { path: '', component: ExercicesComponent },
      { path: 'exo01', component: Exercice01Component },
      { path: 'exo02', component: Exercice02Component },
      { path: 'exo03', component: Exercice03Component },
      { path: 'exo04', component: Exercice04Component },
      { path: 'exo05', component: Exercice05Component },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
