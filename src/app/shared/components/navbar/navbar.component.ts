import { Component, OnInit } from '@angular/core';
import { FakeAuthObsService } from '../../services/fake-auth-obs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isConnectedSubject: boolean = false;
  isConnectedBehaviorSubject: boolean = false;

  constructor (private _fakeAuthObsService: FakeAuthObsService) { }

  ngOnInit (): void {
    // this.isConnected = this._fakeAuthObsService.isConnected;

    this._fakeAuthObsService.statusSubject$.subscribe({
      next: (data: boolean) => { console.log("statusSubject: ", data); this.isConnectedSubject = data; }
    });

    this._fakeAuthObsService.statusBehaviorSubject$.subscribe({
      next: (data: boolean) => { console.log("statusBehaviorSubject: ", data); this.isConnectedBehaviorSubject = data }
    });
  }

}
