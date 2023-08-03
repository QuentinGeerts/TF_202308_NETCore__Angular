import { Component } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component {

  today: Date = new Date();

  quentin = { nom: 'Geerts', prenom: 'Quentin', sexe: 'H' };

}
