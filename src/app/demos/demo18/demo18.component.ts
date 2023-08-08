import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html',
  styleUrls: ['./demo18.component.scss']
})
export class Demo18Component implements DoCheck {

  user!: User;

  constructor (private _activatedRoute: ActivatedRoute) { }

  ngDoCheck (): void {
    this.user = this._activatedRoute.snapshot.data['user'];
  }

}
