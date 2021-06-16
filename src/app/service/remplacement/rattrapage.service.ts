import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Rattrapage {
  IdRattrapage:number;
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
export class RattrapageService {

  private url = 'http://localhost:9191/';
  constructor(private http:HttpClient,private route:Router) { }
  
 

  getSeance()
  {
    return this.http.get(this.url+"enseignant/seance");
  }


  getFreeSalle(dateRatt,idSeance)
  {
    return this.http.get(this.url+"remplacement/freeSalle/"+dateRatt+"/"+idSeance);
  }

  getSeanceAbsence(){
    return this.http.get(this.url+"enseignant/getSeanceAbsence");

  }

  getRatt()
  {
    return this.http.get<[Rattrapage]>(this.url + 'enseignant/getRattrapages');
  }

  create(ratt){
    console.log(ratt);
    
    return this.http.post(this.url+ "enseignant/addRattrapage", ratt);
  }

  update(preratt: Rattrapage, id: string){
    return this.http.put(this.url + 'enseignantPreRatt/updateEnseignantPreRatt' + id, preratt);

  }
  remove(id)
  {
    return this.http.delete(this.url + 'enseignant/deleteEnseignantRatt/' + id);
  }
}
