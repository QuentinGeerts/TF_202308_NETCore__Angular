import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
  return inject(FakeAuthService).isLoggedIn()
    ? true
    : inject(Router).navigateByUrl('/demos/demo17');
};
