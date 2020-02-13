import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pet } from "../models/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private urlServidor = "http://localhost/AJAX/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  getPets(idOwner){
    var objPets = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: idOwner
    });
    return this.http.post<Pet[]>(this.urlServidor, objPets);
  }

  addPets(pet){
    var objPetAdd = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });
    return this.http.post(this.urlServidor, objPetAdd);
  }
}
