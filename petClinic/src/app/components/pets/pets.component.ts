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


  constructor(private http: PetService, private ruta: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
