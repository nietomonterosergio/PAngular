import { Component, OnInit } from '@angular/core';
import { PetService } from "../../services/pet.service";
import { OwnerService } from "../../services/owner.service";
import { PettypeService } from "../../services/pettype.service";
import { Pet } from "../../models/pet";
import { Owner } from "../../models/owner";
import { Pettype } from "../../models/pettype";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  //Atributos
  private pet: Pet
  private owner: Owner
  private petType: Pettype[]



  private texto: string;
  private globalOwnerId: number;
  private globalPetId: number;


  constructor(private httpPet: PetService, private httpOwner: OwnerService, private httptype: PettypeService, private ruta: Router, private route: ActivatedRoute) {

    //Se deben inicializar cuando vamos a escribir estos obetos en el html, porque si no se pone a null y da un error
    this.pet = <Pet>{};
    this.owner = <Owner>{};
  }

  ngOnInit() {

    //Debemos de tener en cuenta que para añadir debemos de pasarle el id del owner mientras que para modificar debemos de pasar el id del pet 
    console.log("Estamos en el petForm")
    const ownerId = this.route.snapshot.params["idOwner"];
    console.log("OwnerId " + ownerId);

    this.globalOwnerId = ownerId;

    const petId = this.route.snapshot.params["idPet"];
    console.log("OwnerPet " + petId);

    this.globalPetId = petId;

    if (ownerId) {
      //Tenemos que recoger los datos el owner para poder añadir una mascota porque necesita el id del owner
      this.httpOwner.getOwnerId(ownerId).subscribe(detallesOwner => {
        console.log("Owner para añadir pets");
        console.log(detallesOwner);
        this.texto = "ADD";

        this.owner = detallesOwner;
      });
    }
    if (petId) {

      this.httpPet.getPetId(petId).subscribe(detallesPet => {
        console.log("Pet para modificar");
        console.log(detallesPet);

        this.pet = detallesPet;
        this.owner = detallesPet.owner;
        this.texto = "Edit";



      });
    }

    //Recogemos los datos del petype para escribirlos en el form
    this.httptype.getPettype().subscribe(pettypes => {
      //console.log(pettypes);

      this.petType = pettypes;
    });

  }

  addModPet() {
    console.log(this.pet);

    if (this.globalOwnerId) {
      this.pet.owner = this.owner;
      this.httpPet.addPets(this.pet).subscribe(respuesta => {
        console.log(respuesta);
        this.ruta.navigate(["/owner/" + this.owner.id])
      });
    }
    if(this.globalPetId){
      this.httpPet.modPets(this.pet).subscribe(respuesta => {
        console.log(respuesta);
        this.ruta.navigate(["/owner/" + this.owner.id])
      });
    }

  }

}
