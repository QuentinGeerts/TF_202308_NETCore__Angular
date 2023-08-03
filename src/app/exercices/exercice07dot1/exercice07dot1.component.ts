import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice07dot1',
  templateUrl: './exercice07dot1.component.html',
  styleUrls: ['./exercice07dot1.component.scss']
})
export class Exercice07dot1Component {

  timer!: ReturnType<typeof setInterval> | null;
  count: number = 0;

  start (): void {
    if (this.timer) return;
    this.timer = setInterval(() => { this.count = this.count + 1; }, 1000);
  }

  stop (): void {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  }

  reset (): void {
    this.count = 0;
    this.stop();
  }

}
