import { Component } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component {

  messageToChild: string = "Ceci est le message provenant du parent.";
  colorToChild: string = "bg-lightblue";

  messageFromChild: string = "";

  changeColor(): void {
    if (this.colorToChild === "bg-lightblue") this.colorToChild = "bg-lightcoral";
    else this.colorToChild = "bg-lightblue"; 
  }

  receiveEmit(message: string): void {
    this.messageFromChild = message;
  }

}
