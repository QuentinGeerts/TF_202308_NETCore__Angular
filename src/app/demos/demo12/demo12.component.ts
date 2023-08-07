import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component implements OnInit {

  username: string = "";
  password: string = "";

  isConnected: boolean = false;
  message: string = "";

  constructor (private _fakeAuthService: FakeAuthService) { }

  ngOnInit (): void {
    this.isConnected = this._fakeAuthService.isLoggedIn();
  }

  logIn (): void {
    this._fakeAuthService.connect(this.username, this.password);

    if (this.isConnected === this._fakeAuthService.isLoggedIn()) {
      this.message = "Identifiant ou mot de passe incorrect";
    }
    else {
      this.isConnected = this._fakeAuthService.isLoggedIn();
      this.message = "";
      this.username = "";
      this.password = "";
    }
    
  }

  logOut (): void {
    this._fakeAuthService.disconnect();
    this.isConnected = this._fakeAuthService.isLoggedIn();
  }

}
