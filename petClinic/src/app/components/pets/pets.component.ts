import { Component, OnInit, Input } from '@angular/core';
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

  //Debemos de incluir un parámetro de entrada para recoger el pet y de esta manera poder escribirlo en el html
  @Input() pet: Pet;


  constructor(private http: PetService, private ruta: Router, private route: ActivatedRoute) {
      
   }

  ngOnInit() {

  }

}
