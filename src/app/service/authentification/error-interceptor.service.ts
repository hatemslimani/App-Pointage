import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let autheService = this.injector.get(AuthServiceService)
    return next.handle(req).pipe(catchError(err => {
      if ([401, 403].indexOf(err.status) != -1) {
        autheService.logoutUser();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
