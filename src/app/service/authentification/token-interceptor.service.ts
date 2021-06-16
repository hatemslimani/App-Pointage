import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }
  intercept(req, next)
  {
    let autheService=this.injector.get(AuthServiceService) 
    if (req.url.indexOf('http://localhost:9191/user/authenticate')==-1) {
      req=req.clone({
        setHeaders:{          
          Authorization:`Bearer ${autheService.getToken()}`
        }
      })     
    }   
    return next.handle(req)
  }
}
