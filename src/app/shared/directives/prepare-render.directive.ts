import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrepareRender]'
})
export class PrepareRenderDirective {

  constructor (private el: ElementRef) {
    this.el.nativeElement.style.color = "tomato";
    this.el.nativeElement.style.fontSize = "18px";
    this.el.nativeElement.style.backgroundColor= "lightgrey";
  }

}
