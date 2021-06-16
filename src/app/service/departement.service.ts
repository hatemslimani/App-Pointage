import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeanceInterface } from 'src/app/Interface/SeanceInterface';
import { ProblemPointage } from '../Interface/ProblemPointageInterface';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  uri="http://localhost:9191/";
  constructor(private http :HttpClient) 
  { }
  getBlocks()
  {
    return this.http.get(this.uri+"pointage/blocks");
  }
  getEtagesByBlock(idBlock)
  {
    return this.http.get(this.uri+"pointage/etages/"+idBlock)
  }
  sendPointage(idBlock,pointage)
  {
    return this.http.post(this.uri+"pointage/"+idBlock,pointage);
  }
  getSeance():Observable<SeanceInterface>
  {
    return this.http.get<SeanceInterface>(this.uri+"pointage/seance");
  }
  getAllProblemPointage():Observable<ProblemPointage[]>
  {
    return this.http.get<ProblemPointage[]>(this.uri+"pointage/problem");
  }
  getNbNewProblemPointage():Observable<number>
  {
    return this.http.get<number>(this.uri+"pointage/problem/new");
  }
  getNewNotification()
  {
    return this.http.get(this.uri+"enseignant/getNewNotification");
  }
  getOldNotification()
  {
    return this.http.get(this.uri+"enseignant/getOldNotification");
  }
  MarkVue(listNotification)
  {
    return this.http.post(this.uri+"enseignant/MarkVue",listNotification);
  }
  getNbNewNotification():Observable<Number>
  {
    return this.http.get<Number>(this.uri+"notification/getNbNewNotification");
  }
}
