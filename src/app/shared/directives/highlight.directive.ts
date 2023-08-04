import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = "";
  @Input() otherColor: string = "";

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  onMouseEnter (): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener("mouseleave")
  onMouseLeave (): void {
    
    this.el.nativeElement.style.backgroundColor = null;
  }

  @HostListener("click")
  onClick (): void {
    this.el.nativeElement.style.backgroundColor = this.otherColor ? this.otherColor : this.appHighlight;
    this.el.nativeElement.style.color = null;
  }

}
