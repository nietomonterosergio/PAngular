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

  //Esta peticion inserta un owner y devuelve un objeto con atributo result "OK"
  addOwner(owner){
    var objOwnerAdd = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    });
    return this.http.post(this.urlServidor, objOwnerAdd);
  }

  //Esta peticion borrar un owner y devuelve la lista de owner
  delOwner (id, listado){
    var objOwnerDel = JSON.stringify({
      accion: "BorraOwner",
      listado: listado,
      id: id
    });
    return this.http.post(this.urlServidor, objOwnerDel);
  }

  //Esta peticion modifica un owner y devuelve un objeto con atributo result "OK"
  modOwner(owner){
    var objOwnerMod = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner
    });
    return this.http.post(this.urlServidor, objOwnerMod);
  }
}
