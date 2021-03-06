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

  //Obetener la lista de pets, lo devuelve como string 
  getPets(idOwner){
    var objPets = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: idOwner
    });
    return this.http.post<Pet[]>(this.urlServidor, objPets);
  }

  //Obtener un pet mediante su id, lo devuelve como un objeto
  getPetId(idPet){
    var objPetId = JSON.stringify({
      accion: "ObtenerPetId",
      id: idPet
    });
    return this.http.post<Pet>(this.urlServidor, objPetId);
  }
  
  ListarVisitsPets(idPet){
    var objVisits = JSON.stringify({
      accion: "ListarVisitasPet",
      id: idPet
    });
    return this.http.post<any>(this.urlServidor, objVisits);
  }

  addPets(pet){
    var objPetAdd = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });
    return this.http.post<any>(this.urlServidor, objPetAdd);
  }

  modPets(pet){
    var objPetMod = JSON.stringify({
      accion: "ModificaPet",
      pet: pet
    });
    return this.http.post<any>(this.urlServidor, objPetMod);
  }

  delPets(idPet){
    var objPetDel = JSON.stringify({
      accion: "BorraPet",
      id: idPet
    });
    return this.http.post<any>(this.urlServidor, objPetDel);
  }
}
