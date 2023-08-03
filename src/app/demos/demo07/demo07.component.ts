import { Component } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component {

  nbSecondes: number = 90061;

  formateurs: any[] = [
    { id: '001', nom: 'Geerts', prenom: 'Quentin' },
    { id: '002', nom: 'Person', prenom: 'Michael' },
    { id: '003', nom: 'Legrain', prenom: 'Samuel' },
  ]

}
