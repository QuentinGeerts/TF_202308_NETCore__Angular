import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component {

  maVariable1: string = "";
  maVariable2: number = 0;
  maVariable3: boolean = false;

  maVariable4: string = "Hello World !";

  changeValue (event: Event): void {
    this.maVariable4 = (event.target as HTMLInputElement).value;
  }

}
