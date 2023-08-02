import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice01',
  templateUrl: './exercice01.component.html',
  styleUrls: ['./exercice01.component.scss']
})
export class Exercice01Component {

  lastname: string = "Geerts";
  firstname: string = "Quentin";
  email: string = "quentin.geerts@bstom.be";
  birthdate: Date = new Date (1996, 3, 3);
  gender: string = "homme";
  languages: string[] = ['Français', 'Anglais'];
  image?: string = "https://cdn.kobo.com/book-images/2c51ebd3-5134-41fc-8a1d-1bc83610fd55/1200/1200/False/solo-leveling-vol-3-comic.jpg";

}
