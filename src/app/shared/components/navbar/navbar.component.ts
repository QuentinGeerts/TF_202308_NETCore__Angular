import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../../services/fake-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isConnected: boolean = false;

  constructor (private _fakeAuthService: FakeAuthService) { }
  
  ngOnInit (): void {
    this.isConnected = this._fakeAuthService.isLoggedIn();
  }

}
