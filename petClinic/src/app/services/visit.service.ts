import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Visit } from "../models/visit";

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  
  obtenerVisitaId(idVisit){
    var objVisit = JSON.stringify({
      accion: "ObtenerVisitId",
      id: idVisit
    });
    return this.http.post<Visit>(this.urlServidor, objVisit);
  }

  addVisit(visit: Visit){
    var objVisitAdd = JSON.stringify({
      accion: "AnadeVisit",
      visit: visit
    });
    return this.http.post<any>(this.urlServidor, objVisitAdd);
  }

  modVisit(visit: Visit){
    var objVisitMod = JSON.stringify({
      accion: "ModificaVisit",
      visit: visit
    });
    return this.http.post<any>(this.urlServidor, objVisitMod);
  }

  delVisit(idVisit){
    var objVisitDel = JSON.stringify({
      accion: "BorraVisit",
      id: idVisit 
    });
    return this.http.post<any>(this.urlServidor, objVisitDel);
  }


}
