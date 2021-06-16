import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/authentification/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private authService:AuthServiceService,private route:Router) { }

  ngOnInit() {
  }
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home', icone: 'home-outline'},
    {titre: 'Notification', chemin: '/menu/meteo', icone: 'notifications-outline'},
    {titre: 'Profile', chemin: '/menu/contacts', icone: 'settings-outline'},
    {titre: 'Déconnexion', chemin: 'deconnexion', icone: 'log-out-outline'}
   ];
   onMenuItem(p)
   {
     switch(p.titre)
     {
       case "Déconnexion":{this.authService.logoutUser();break;}
       case 'notification':{this.route.navigate(['/home/notification']);break;}
       case 'Profile':{this.route.navigate(['/home/profil']);break;}
       case 'Accueil':
         {if(this.authService.getRole()=='CONTROLLER'){this.route.navigate(['/home/aceuil']);break;}
         else{if(this.authService.getRole()=='ENSEIGNANT'){this.route.navigate(['/home/teacher']);break}}break;}
       default:{break;}
     }
   }

}
