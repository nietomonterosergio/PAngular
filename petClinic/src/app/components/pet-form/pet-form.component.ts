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
  private petType:  Pettype[]


  private nombreOwner: string

  constructor(private httpPet: PetService, private httpOwner: OwnerService, private httptype: PettypeService ,private ruta: Router, private route: ActivatedRoute) { 

    this.pet = <Pet>{};
    this.owner = <Owner>{};
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params["idOwner"];
    console.log(ownerId);

    //Tenemos que recoger los datos el owner para poder añadir una mascota porque necesita el id del owner
    this.httpOwner.getOwnerId(ownerId).subscribe(detallesOwner => {
      console.log("Owner para añadir pets");
      console.log(detallesOwner);

      this.owner = detallesOwner;
    });

    //Recogemos los datos del petype para escribirlos
    this.httptype.getPettype().subscribe(pettypes => {
      console.log(pettypes);

      this.petType = pettypes;
    });

  }

  addPet(){
    console.log(this.pet);
    this.pet.owner = this.owner;
    this.httpPet.addPets(this.pet).subscribe(respuesta =>{
      
      console.log(respuesta);

     this.ruta.navigate(["/owner/" + this.owner.id])
    });
  }

}
