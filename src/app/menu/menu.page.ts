import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pages = [
    {titre: 'Accueil', chemin: '/menu/home', icone: 'home-outline'},
    {titre: 'notification', chemin: '/menu/meteo', icone: 'notifications-outline'},
    {titre: 'Parametre', chemin: '/menu/contacts', icone: 'settings-outline'},
    {titre: 'Déconnexion', chemin: 'deconnexion', icone: 'log-out-outline'}
   ];
   onMenuItem(p)
   {
     return false;
   }

}
