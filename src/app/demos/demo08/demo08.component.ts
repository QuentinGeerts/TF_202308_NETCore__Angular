import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component {

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;

  currentStyle: any;

  isActive: boolean = false;

  setCurrentStyle (): void {
    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '16px'
    }
  }

  toggleItalic (): void {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  toggleBold (): void {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  toggleSize (): void {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  EnableClass(): void {
    this.isActive = !this.isActive;
  }

}
