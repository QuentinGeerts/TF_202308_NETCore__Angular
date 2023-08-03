import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component {

  isEnabled: boolean = false;
  maVariable: number = 0;

  min: number = 0;
  max: number = 10;
  rangeValue: number = 5;

  url: string = "https://www.google.com";
  urlName: string = "Google";
  target: string = "_blank";

  src: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  alt: string = "Une belle image rosée";
  width: string = "200";

}
