import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice02',
  templateUrl: './exercice02.component.html',
  styleUrls: ['./exercice02.component.scss']
})
export class Exercice02Component {

  lastname: string = "";
  firstname: string = "";
  email: string = "";
  birthdate!: Date;
  gender: string = "";
  languages: string = "";
  image?: string;

}
