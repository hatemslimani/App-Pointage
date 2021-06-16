import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from './service/authentification/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private route: Router) {
  }
  canActivate():boolean {
    if (this.authService.isLogged()) {
      this.route.navigate(['/dashboard/home']);
      return false;
    }
    return true;
  }
  
}
