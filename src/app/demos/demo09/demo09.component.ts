import { Component } from '@angular/core';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrls: ['./demo09.component.scss']
})
export class Demo09Component {

  isActive: boolean = false;

  fruits: string[] = ['pomme', 'poire', 'cerise', 'ananas', 'pêche', 'litchi', 'raisin', 'banane'];

  inputValue: string = "";

  toggle (): void {
    this.isActive = !this.isActive;
  }

}
