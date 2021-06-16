import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/service/absence/absence.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.page.html',
  styleUrls: ['./absence.page.scss'],
})
export class AbsencePage implements OnInit {
  listAbsence;
  constructor(private absenceService:AbsenceService) { }

  ngOnInit() {
    this.getAllAbsence()
  }
  getAllAbsence()
  {
    this.absenceService.getAllAbsence().subscribe(data=>{
      this.listAbsence=data;
    })
  }
}
