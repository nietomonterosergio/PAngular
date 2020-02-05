import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";
  constructor(private http: HttpClient) { }

  //Es una arrive que me devuelve la lsita de owners
  getOwners(){
    var param = JSON.stringify({
      accion: "ListarOwners"
    });
    return this.http.post<Owner[]>(this.urlServidor, param);
  }
}
