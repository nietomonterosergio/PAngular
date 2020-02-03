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

  peticionAnadir(dni:String, nombre: string, apellidos: string){
    console.log("Estoy en añadir");
    var objAnadir = {
      servicio: "insertar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos
    };
    return this.http.post<Persona[]>(this.urlServidor, JSON.stringify(objAnadir));
  }

  peticionBorrar(id: number){
    console.log("Estoy en borrar");
    var objBorrar = {
      servicio: "borrar",
      id: id
    }
    return this.http.post<Persona[]>(this.urlServidor, JSON.stringify(objBorrar));
  }

  peticionSelPersona(id: number){
    var objSelPersona = {
      servicio: "selPersonaID",
      id: id
    }
    return this.http.post<Persona>(this.urlServidor, JSON.stringify(objSelPersona));
  }

  peticionModificar(dni: string, nombre: string, apellidos: string, id:number){
  
    var objModificar = {
      servicio: "modificar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos,
      id: id
    }
    return this.http.post<Persona[]>(this.urlServidor, JSON.stringify(objModificar));
  }

}
