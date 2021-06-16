import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
export interface PreRattrapage {
  cod_rattrapage:number;
  idEnsiegnant:number;
  dateAbsence:Date;
  idNiveau:number;
  idSeanceAbsence:number;
  validee:boolean;
  ensiegnee:boolean,
  dateRatt:Date,
  idSalle:number,
  idSeance:number,
  annee:number,
  semestre:number,
}
@Injectable({
  providedIn: 'root'
})
export class PreRattrapageService {
  private url = 'http://localhost:9191/';
  constructor(private http:HttpClient,private route:Router) { }
  getPrerattrapageById(id)
  {
    return this.http.get(this.url+"enseignantPreRatt/getPrerattrapageById/"+id);
  }
 

  getSeance()
  {
    return this.http.get(this.url+"enseignant/seance");
  }


  getFreeSalle(dateRatt,idSeance)
  {
    return this.http.get(this.url+"remplacement/freeSalle/"+dateRatt+"/"+idSeance);
  }


  getPreRatt()
  {
    return this.http.get<[PreRattrapage]>(this.url + 'enseignant/getPreRattrapages');
  }

  create(preratt){
    return this.http.post(this.url+ "enseignant/addPreRattrapage", preratt);
  }

  update(preratt: PreRattrapage, id: string){
    return this.http.put(this.url + 'enseignantPreRatt/updateEnseignantPreRatt' + id, preratt);

  }

  remove(id)
  {
    return this.http.delete(this.url + 'enseignant/deleteEnseignantPreRatt/' + id);
  }
  getNiveau()
  {
    return this.http.get(this.url+"enseignant/getNiveau");
  }
  getSeanceDenseignement(dateAbsence)
  {
    return this.http.get(this.url+"enseignant/SeanceDenseignement/"+dateAbsence);
  }
}
