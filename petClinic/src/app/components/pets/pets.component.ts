import { Component, OnInit } from '@angular/core';
import { PetService } from "../../services/pet.service";
import { Pet } from "../../models/pet";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  //Atributos
  private pets: Pet[];


  constructor(private http: PetService, private ruta: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const ownerId = this.route.snapshot.params["id"];
    console.log("Id Para pet");
    console.log(ownerId);

    this.http.getPets(ownerId).subscribe(detallesPet => {
        console.log("Detalle del pet")
        console.log(detallesPet);

        this.pets = detallesPet;
    });
  }

}
