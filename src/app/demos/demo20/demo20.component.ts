import { Component, OnInit } from '@angular/core';
import { FakeAuthObsService } from 'src/app/shared/services/fake-auth-obs.service';

@Component({
  selector: 'app-demo20',
  templateUrl: './demo20.component.html',
  styleUrls: ['./demo20.component.scss']
})
export class Demo20Component implements OnInit {

  isConnected: boolean = false;

  constructor (private _fakeAuthObs: FakeAuthObsService) { }

  ngOnInit (): void {
    this._fakeAuthObs.statusBehaviorSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  connect (): void {
    this._fakeAuthObs.login();
    // this.isConnected = this._fakeAuthObs.isConnected;
  }

  disconnect (): void {
    this._fakeAuthObs.logout();
    // this.isConnected = this._fakeAuthObs.isConnected;
  }

}
