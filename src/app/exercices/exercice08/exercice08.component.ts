import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice08',
  templateUrl: './exercice08.component.html',
  styleUrls: ['./exercice08.component.scss']
})
export class Exercice08Component implements OnInit {

  min: number = 50;
  max: number = 250;

  height: number = 50;
  width: number = 50;
  color: string = '#ffffff';
  isCircle: boolean = false;

  borderWidth: number = 1;
  borderColor: string = '#000000';
  borderStyle: string = 'solid';

  styles: any;

  ngOnInit (): void {
    this.update();
  }

  update (): void {
    this.styles = {
      'height': this.height + 'px',
      'width': this.width + 'px',
      'background-color': this.color,
      'border-width': this.borderWidth + 'px',
      'border-color': this.borderColor,
      'border-style': this.borderStyle
    };
  }

}
