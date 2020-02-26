import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Estadocivil } from "../modelos/estadocivil";

@Injectable({
  providedIn: 'root'
})
export class EstadocivilService {

  private urlServidor = "http://localhost/AJAX/Servicios/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  listarEstadosCiviles(){
    var objestadocivil = JSON.stringify({
      accion: 9
    });
    return this.http.post<Estadocivil[]>(this.urlServidor, objestadocivil);
  }

  listarSexos(){
    var objSexo = JSON.stringify({
      accion: 5
    });
    return this.http.post<Estadocivil[]>(this.urlServidor, objSexo);
  }


}
