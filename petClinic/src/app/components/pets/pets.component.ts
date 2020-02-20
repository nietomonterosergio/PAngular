import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  //Debemos de incluir un parámetro de salida para poder eliminar el pet y actualizar la lista de pets
  @Output() borrarPet = new EventEmitter


  constructor(private http: PetService, private ruta: Router, private route: ActivatedRoute) {
      
   }

  ngOnInit() {
    //console.log(this.pet);
  }

  deletePet(id, name) {
    // console.log("Estamos en delete Pet");
    // console.log("Pet id "+id);

    if(confirm("¿Quieres borrar al pet "+name+ "?")){

      
      this.http.delPets(id).subscribe(respuesta => {
          //console.log(respuesta);
        this.borrarPet.emit(respuesta);
      });
    }
    
  }

}
