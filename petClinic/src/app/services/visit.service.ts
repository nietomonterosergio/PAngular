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
  addVisit(visit: Visit){
    var objVisitAdd = JSON.stringify({
      accion: "AnadeVisit",
      visit: visit
    });
    return this.http.post<any>(this.urlServidor, objVisitAdd);
  }

}
