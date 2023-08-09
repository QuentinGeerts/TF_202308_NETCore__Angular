import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor () { }

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Récupération du token stocké dans le localStorage
    const token = localStorage.getItem("token");

    // Vérifier s'il y a un token et qu'il n'est pas vide
    if (token && token != "") {
      // Clôner la requête et ajouter l'en-tête d'authentification
      const clonedRequest = request.clone({ setHeaders: { Authorization: "Bearer " + token } });

      // Ajouter dans les providers du module l'interceptor

      // Retourner la requête clônée
      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
