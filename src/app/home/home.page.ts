import { Component , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DepartementService } from 'src/app/service/departement.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newProblem:Number;
  constructor( private menuCtrl: MenuController,private route:Router,private DepServ: DepartementService) {

  }
  ngOnInit(): void {
    setInterval(() => {
      this.getNewProblemPointage()
    },1000)
    
  }

  openMenu()
  {
    this.menuCtrl.open('monMenu');
  }
  toNotification()
  {
    this.route.navigate(['/home/notification'])
  }
  getNewProblemPointage()
  {
    this.DepServ.getNbNewProblemPointage().subscribe(data=>{
      this.newProblem=data;
    })
  }

}
