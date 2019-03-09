import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      try {
        // add authoriation header with token if avaliable
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser  && currentUser.token) {
          request = request.clone({
            setHeaders: {
              authoriation: `Bearer ${currentUser.token}`
            }
          });
        }
      } catch (err) {
        return next.handle(request);
      }
  }
}
