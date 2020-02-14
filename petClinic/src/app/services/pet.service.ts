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

  //Obetener la lista de pets
  getPets(idOwner){
    var objPets = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: idOwner
    });
    return this.http.post<Pet[]>(this.urlServidor, objPets);
  }

  //Obtener un pet mediante su id
  getPetId(idPet){
    var objPetId = JSON.stringify({
      accion: "ObtenerPetId",
      id: idPet
    });
    return this.http.post(this.urlServidor, objPetId);
  }

  addPets(pet){
    var objPetAdd = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });
    return this.http.post(this.urlServidor, objPetAdd);
  }

  modPets(pet){
    var objPetMod = JSON.stringify({
      accion: "ModificaPet",
      pet: pet
    });
    return this.http.post(this.urlServidor, objPetMod);
  }
}
