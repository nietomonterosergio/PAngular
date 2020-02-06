import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vet } from '../models/vet';


@Injectable({
  providedIn: 'root'
})
export class VetService {

  //Atributos
  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";


  constructor(private http: HttpClient) { }

  //Métodos y peticiones

  //Este método recibe un modelo vet (intw)
  getVets () {
    var param = JSON.stringify({
      accion: "ListarVets"
    });
    return this.http.post<Vet[]>(this.urlServidor, param);
  }
  
}
