import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";
  constructor(private http: HttpClient) { }

  //Esta peticion devuelve un arrive que me devuelve la lista de owners
  getOwners(){
    var objOwners = JSON.stringify({
      accion: "ListarOwners"
    });
    return this.http.post<Owner[]>(this.urlServidor, objOwners);
  }

  
  //Esta peticion devuelve el objeto de owner seleccionado
  getOwnerId(id){

    var objOwner = JSON.stringify({
      accion: "ObtenerOwnerId",
      id: id
    });
    return this.http.post<Owner>(this.urlServidor, objOwner);
  }
}
