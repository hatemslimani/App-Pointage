import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthServiceService } from './service/authentification/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private route:Router)
    {
    }
  canActivate(url: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    if(this.authService.isLogged())
    {
      if (url.data.role === this.authService.getRole()) {
        return true;
      }
      else
      {
        switch(this.authService.getRole())
        {
          case 'CONTROLLER':{this.route.navigate(['/home/aceuil']);break;}
          case 'ENSEIGNANT':{this.route.navigate(['/home/teacher']);break;}
          default:{this.authService.logoutUser();break;}
        }
        return false;
      }
    }
    else
    {
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
