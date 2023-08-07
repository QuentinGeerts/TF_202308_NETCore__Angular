import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent {

  @Output() emitToParent: EventEmitter<string> = new EventEmitter<string>();
  messageFromChild: string = "Message provenant de l'enfant";

  onEmit(): void {
    this.emitToParent.emit(this.messageFromChild);
  }

}
