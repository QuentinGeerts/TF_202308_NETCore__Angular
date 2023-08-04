import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice07dot2',
  templateUrl: './exercice07dot2.component.html',
  styleUrls: ['./exercice07dot2.component.scss']
})
export class Exercice07dot2Component {

  temperature1: number = 0;
  temperature2: number = 0;
  temperature3: number = 0;

  selectedUnite: string = "celsius";
  targetUnite: string = "celsius";

}
