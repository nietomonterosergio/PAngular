import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAJAXService {

  //Atributos

    //El servidor y el cliente no está en el mismo puerto. Por lo tanto están en puertos diferentes
  //Para cojer la url los cojemos directamente desde el xammp en localhost
    private urlServidor = "http://localhost/AJAX/Lista_Personas/Javascript/servidor.php";

  constructor(private http: HttpClient) { }

  //Hay que tener en cuenta como es el servidor y este servidor recibe un objeto
  //Podemos hacer de dos maneras diferentes: 
  
  //Pasandole el objeto como parámetro desde el listado.component donde hacemos la petición ajax
  peti(objeto: object) {
    console.log("Estoy en peti objeto");
    return this.http.post(this.urlServidor, JSON.stringify(objeto));
  }

  //Otra forma y mas recomendable es haciendo una por una las peticiones ajax para cada servicio
  //Porque es recomendable en la clase servicio deben de estar todas las cosas del servidor y en 
  //listado.ts solo poner la petición ajax
  petiListar(){
    console.log("Estoy en listar");
    var objListar = {
      servicio: "listar"
    };
    return this.http.post(this.urlServidor, JSON.stringify(objListar));
  }

  petiAnadir(dni:String, nombre: string, apellidos: string){
    console.log("Estoy en anadir");
    var objAnadir = {
      servicio:"insertar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos
    };
    return this.http.post(this.urlServidor, JSON.stringify(objAnadir))
  }

  petiBorrar(id){
    console.log("Estoy en borrar");
    var objBorrar = {
      servicio: "borrar",
      id: id
    };
    return this.http.post(this.urlServidor, JSON.stringify(objBorrar));
  }

  petiSelPersona(id){
    console.log("Estoy en selPersona");
    var objSelPersona = {
      servicio: "selPersonaID",
      id: id
    }
    return this.http.post(this.urlServidor, JSON.stringify(objSelPersona));
  }
}
