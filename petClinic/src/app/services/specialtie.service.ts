import { Injectable } from '@angular/core';
import { Specialties } from "../models/specialties";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialtieService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  listSpecialties(){
    var objSpecialtie = JSON.stringify({
      accion: "ListarSpecialties"
    });
    return this.http.post<Specialties[]>(this.urlServidor, objSpecialtie);
  }
}
