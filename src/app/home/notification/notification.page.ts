import { Component, OnInit } from '@angular/core';
import { ProblemPointage } from 'src/app/Interface/ProblemPointageInterface';
import { AuthServiceService } from 'src/app/service/authentification/auth-service.service';
import { DepartementService } from 'src/app/service/departement.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  problems:ProblemPointage[];
  listNewNotification=null;
  listOldNotification:any;
  show:boolean=false;
  show2:boolean=false;
  constructor(private DepServ: DepartementService,public authService:AuthServiceService) { }

  ngOnInit() {
   // this.getAllProblemPointage();
    if(this.authService.getRole()=="ENSEIGNANT"){
      this.getNewNotifications()
      this.getOldNotifications()
    }
  }
  getAllProblemPointage() {
    this.DepServ.getAllProblemPointage().subscribe(data => {
      this.problems=data;
    })
  }
  getNewNotifications()
  {
    this.DepServ.getNewNotification().subscribe(data=>{
      this.listNewNotification=data;
      this.MarkVue(data);
      this.show=true
    })
  }
  getOldNotifications()
  {
    this.DepServ.getOldNotification().subscribe(data=>{
      this.listOldNotification=data;
      this.show2=true
    })
  }
  MarkVue(data)
  {
    this.DepServ.MarkVue(data).subscribe(data=>{
    });
  }

}
