import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { DemosComponent } from './demos/demos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { ChildInputComponent } from './demos/demo11/child-input/child-input.component';
import { ChildNgcontentComponent } from './demos/demo11/child-ngcontent/child-ngcontent.component';
import { ChildOutputComponent } from './demos/demo11/child-output/child-output.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';
import { Demo17guardedComponent } from './demos/demo17/demo17guarded/demo17guarded.component';
import { Demo18Component } from './demos/demo18/demo18.component';
import { Demo19Component } from './demos/demo19/demo19.component';
import { Demo20Component } from './demos/demo20/demo20.component';
import { AddComponent } from './demos/demo21/add/add.component';
import { Demo21Component } from './demos/demo21/demo21.component';
import { UpdateComponent } from './demos/demo21/update/update.component';
import { Demo22Component } from './demos/demo22/demo22.component';
import { Exercice01Component } from './exercices/exercice01/exercice01.component';
import { Exercice02Component } from './exercices/exercice02/exercice02.component';
import { Exercice03Component } from './exercices/exercice03/exercice03.component';
import { Exercice04Component } from './exercices/exercice04/exercice04.component';
import { Exercice05Component } from './exercices/exercice05/exercice05.component';
import { Exercice07dot1Component } from './exercices/exercice07dot1/exercice07dot1.component';
import { Exercice07dot2Component } from './exercices/exercice07dot2/exercice07dot2.component';
import { Exercice08Component } from './exercices/exercice08/exercice08.component';
import { Exercice09Component } from './exercices/exercice09/exercice09.component';
import { ArticleListComponent } from './exercices/exercice11/article-list/article-list.component';
import { Exercice11Component } from './exercices/exercice11/exercice11.component';
import { Exercice15Component } from './exercices/exercice15/exercice15.component';
import { DetailsComponent } from './exercices/exercice21/details/details.component';
import { Exercice21Component } from './exercices/exercice21/exercice21.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { PrepareRenderDirective } from './shared/directives/prepare-render.directive';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { ChronoPipe } from './shared/pipes/chrono.pipe';
import { GetFormateurPipe } from './shared/pipes/get-formateur.pipe';
import { ReducePipe } from './shared/pipes/reduce.pipe';
import { SecondsToDHMSPipe } from './shared/pipes/seconds-to-dhms.pipe';
import { TemperatureConverterPipe } from './shared/pipes/temperature-converter.pipe';
import { ToCelsiusPipe } from './shared/pipes/to-celsius.pipe';
import { ToFahrenheitPipe } from './shared/pipes/to-fahrenheit.pipe';


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
    Exercice07dot1Component,
    Exercice07dot2Component,
    ChronoPipe,
    ToFahrenheitPipe,
    ToCelsiusPipe,
    TemperatureConverterPipe,
    Demo08Component,
    Exercice08Component,
    Demo09Component,
    Exercice09Component,
    Demo10Component,
    PrepareRenderDirective,
    HighlightDirective,
    Demo11Component,
    ChildInputComponent,
    ChildOutputComponent,
    ChildNgcontentComponent,
    Exercice11Component,
    ArticleListComponent,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    Exercice15Component,
    Demo16Component,
    Demo17Component,
    Demo17guardedComponent,
    Demo18Component,
    Demo19Component,
    Demo20Component,
    Demo21Component,
    AddComponent,
    UpdateComponent,
    Exercice21Component,
    DetailsComponent,
    Demo22Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Important pour le fonctionnement du routing
    FormsModule, // Important pour le fonctionnement du Two-Way Binding
    ReactiveFormsModule, // Important pour le fonctionnement du FormGroup
    HttpClientModule, // Important pour la communication avec une API
  ],
  providers: [
    // provide: indique que vous souhaitez enregistrer un intercepteur pour les requêtes HTTP
    // useClass: la classe que votre intercepteur personnalisé qu'on souhaite utiliser
    // multi: enregistrer plusieurs intercepteur de type HTTP_INTERCEPTORS
    // - true : vous pouvez enregistrer plusieurs intercepteur dans le même provider
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
