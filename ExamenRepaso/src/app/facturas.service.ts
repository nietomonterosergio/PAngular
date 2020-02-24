import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private urlServidor = "http://localhost/AJAX/examenRepaso/servidor.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  listadoFacturas(){
    var objListFacturas = JSON.stringify({
      servicio: "facturas"
    });
    return this.http.post<Object[]>(this.urlServidor,objListFacturas);
  }

  listadoDetalle(id: number){
    var objDetalle = JSON.stringify({
      servicio: "detalle",
      id: id
    });
    return this.http.post<Object[]>(this.urlServidor, objDetalle);

  }

  addDetalle(detalle: Object){
    var objDetalle = JSON.stringify({
      servicio: "anade",
      detalle: detalle
    });
    return this.http.post<Object[]>(this.urlServidor, objDetalle);
  }
  borrarDetalle(id:number, id_factura:number){
    let accion = JSON.stringify({
      servicio: "borra",
      id: id,
      id_factura: id_factura
    })
    return this.http.post(this.urlServidor, accion);
  }

  modificarDetalle(detalle:Object){
    let accion = JSON.stringify({
      servicio: "modifica",
      detalle: detalle
    })
    return this.http.post(this.urlServidor, accion);
  }
}
