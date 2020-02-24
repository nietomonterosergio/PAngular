import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PAJAXService {

  //Atributos
  //private urlServidor = "http://localhost/AJAX/angular/servidor.php";
  private urlServidor = "http://localhost/AJAX/examenRepaso/servidor.php";


  
  constructor(private http: HttpClient) { 

  }

  //Peticiones
  listarFacturas(){
    console.log("Estamos en listarFacturas");

    var objListarFactura = {
      servicio: "facturas"
    }
    return this.http.post<Object[]>(this.urlServidor, JSON.stringify(objListarFactura));
  }

  listarDetalle(id: number){
    console.log("Estamos en listarDetalle");

    var objListarDetalle = {
      servicio: "detalle",
      id: id
    };
    return this.http.post<Object[]>(this.urlServidor, JSON.stringify(objListarDetalle));
  }

  peticionAnadir(detalle: Object){
    console.log("Estamos en añadir");

    var objAnadir = {
      servicio: "anade",
      detalle: detalle
    }
    return this.http.post<Object[]>(this.urlServidor, JSON.stringify(objAnadir));
  }

  peticionBorrar(id: number, id_factura:number){
    console.log("Estamos en borrar");

    var objBorrar = {
      servicio: "borra",
      id: id,
      id_factura: id_factura
    }
    return this.http.post<Object[]>(this.urlServidor, JSON.stringify(objBorrar));
  }

  peticionModificar(detalle: Object){
    console.log("Estamos en modificar");

    var objModificar = {
      servicio: "modifca",
      detalle: detalle
    }
    return this.http.post<Object[]>(this.urlServidor, JSON.stringify(objModificar));
  }
}
