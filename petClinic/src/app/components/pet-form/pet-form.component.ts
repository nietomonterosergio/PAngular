import { Component, OnInit } from '@angular/core';
import { PetService } from "../../services/pet.service";
import { Pet } from "../../models/pet";

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

  constructor(private http: PetService, private ruta: Router, private route: ActivatedRoute) { 

    this.pet = <Pet>{};
  }

  ngOnInit() {
    const petId = this.route.snapshot.params["id"];
    console.log(petId);

    const ownerName = this.route.snapshot.params["owner"];
    console.log(ownerName);
  }

}
