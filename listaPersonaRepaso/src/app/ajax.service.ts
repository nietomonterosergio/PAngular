import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class AJAXService {

  //Atributos
  private urlServidor = "http://localhost/AJAX/Lista_Personas/Javascript/servidor.php";

  constructor(private http: HttpClient) { }


  //Funciones o peticiones Ajax
  peticionListar(){
    console.log("Estoy en listar");
    var objListar = {
      servicio: "listar"
    };
    return this.http.post<Persona[]>(this.urlServidor, JSON.stringify(objListar));
  }
}
