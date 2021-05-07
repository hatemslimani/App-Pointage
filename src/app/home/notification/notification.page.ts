import { Component, OnInit } from '@angular/core';
import { ProblemPointage } from 'src/app/Interface/ProblemPointageInterface';
import { DepartementService } from 'src/app/service/departement.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  problems:ProblemPointage[];
  constructor(private DepServ: DepartementService) { }

  ngOnInit() {
    this.getAllProblemPointage();
  }
  getAllProblemPointage() {
    this.DepServ.getAllProblemPointage().subscribe(data => {
      this.problems=data;
    })
  }
}
