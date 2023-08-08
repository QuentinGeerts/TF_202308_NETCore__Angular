import { CanDeactivateFn } from '@angular/router';

export const confirmGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Voulez-vous quitter la page ?");
};
