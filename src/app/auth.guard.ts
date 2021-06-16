import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './service/authentification/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private route: Router) {
  }
  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
  
}
