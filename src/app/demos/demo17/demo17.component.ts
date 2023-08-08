import { Component } from '@angular/core';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrls: ['./demo17.component.scss']
})
export class Demo17Component {

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
