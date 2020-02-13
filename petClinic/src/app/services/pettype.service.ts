import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pettype } from "../models/pettype";

@Injectable({
  providedIn: 'root'
})
export class PettypeService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  getPettype(){
    var objPettypes = JSON.stringify({
      accion: "ListarPettypes",
    });
    return this.http.post<Pettype[]>(this.urlServidor, objPettypes);
  }
}
