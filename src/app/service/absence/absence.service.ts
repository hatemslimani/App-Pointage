import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http:HttpClient,private route:Router) { }
  private url = 'http://localhost:9191/enseignant/';
  getAllAbsence()
  {
    return this.http.get(this.url+"getAllAbsences");
  }
}
