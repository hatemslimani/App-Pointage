import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DepartementService } from 'src/app/service/departement.service';
import { AuthServiceService } from '../service/authentification/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newProblem:Number;
  nbNewNotification:Number=0;
  constructor( private menuCtrl: MenuController,private route:Router,private DepServ: DepartementService,private authService :AuthServiceService) {

  }
  ngOnInit(): void {
    if(this.authService.getRole()=="ENSEIGNANT"){
      setInterval(() => {
        this.DepServ.getNbNewNotification().subscribe(data=>{
          this.nbNewNotification=data;
        })
      },1000)
      
    }    
  }

  openMenu()
  {
    this.menuCtrl.open('monMenu');
  }
  toNotification()
  {
    this.route.navigate(['/home/notification'])
  }
  goToAcceuil()
  {
    switch(this.authService.getRole())
    {
      case 'CONTROLLER':{this.route.navigate(['/home/aceuil']);break;}
      case 'ENSEIGNANT':{this.route.navigate(['/home/teacher']);break}
      default:{this.authService.logoutUser();break;}
    }
  }

}
