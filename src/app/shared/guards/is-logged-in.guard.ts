import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { FakeAuthService } from '../services/fake-auth.service';

export const isLoggedInGuard: CanActivateChildFn = (childRoute, state) => {
  return inject(FakeAuthService).isLoggedIn()
  ? true
  : inject(Router).navigateByUrl('/demos/demo17');
};
