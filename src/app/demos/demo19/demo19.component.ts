import { Component } from '@angular/core';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
  styleUrls: ['./demo19.component.scss']
})
export class Demo19Component {

  // LocalStorage
  usernameLocal: string = "";
  savedUsernameLocal: string = "";

  saveLocal (): void {
    localStorage.setItem("usernameLocal", JSON.stringify(this.usernameLocal));
  }

  loadLocal (): void {
    const item = localStorage.getItem("usernameLocal");
    this.savedUsernameLocal = item ? JSON.parse(item) : null;
  }

  removeLocal (): void {
    localStorage.removeItem("usernameLocal");
  }

  clearLocal (): void {
    localStorage.clear();
  }

  // SessionStorage
  usernameSession: string = "";
  savedUsernameSession: string = "";

  saveSession (): void {
    sessionStorage.setItem("usernameSession", JSON.stringify(this.usernameSession));
  }

  loadSession (): void {
    const item = sessionStorage.getItem("usernameSession");
    this.savedUsernameSession = item ? JSON.parse(item) : null;
  }

  removeSession (): void {
    sessionStorage.removeItem("usernameSession");
  }

  clearSession (): void {
    sessionStorage.clear();
  }

}
