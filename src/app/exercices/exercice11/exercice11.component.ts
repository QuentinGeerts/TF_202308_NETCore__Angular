import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice11',
  templateUrl: './exercice11.component.html',
  styleUrls: ['./exercice11.component.scss']
})
export class Exercice11Component {

  article: string = "";
  cart: string[] = ['Sel', 'Sucre'];

  addItem (): void {
    this.cart.push(this.article);
  }

  removeItem (index: number): void {
    this.cart.splice(index, 1);
  }

}
