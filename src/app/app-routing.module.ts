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

import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Exercice07dot1Component } from './exercices/exercice07dot1/exercice07dot1.component';
import { Exercice07dot2Component } from './exercices/exercice07dot2/exercice07dot2.component';
import { Exercice08Component } from './exercices/exercice08/exercice08.component';
import { Exercice09Component } from './exercices/exercice09/exercice09.component';
import { Exercice11Component } from './exercices/exercice11/exercice11.component';
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
      { path: 'demo07', component: Demo07Component },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo11', component: Demo11Component },
      { path: 'demo12', component: Demo12Component },
      { path: 'demo13', component: Demo13Component },
      { path: 'demo14', component: Demo14Component },
      { path: 'demo15', component: Demo15Component },
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
      { path: 'exo07dot1', component: Exercice07dot1Component },
      { path: 'exo07dot2', component: Exercice07dot2Component },
      { path: 'exo08', component: Exercice08Component },
      { path: 'exo09', component: Exercice09Component },
      { path: 'exo11', component: Exercice11Component },
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
