import { Component, OnInit } from '@angular/core';
import { VisitService } from "../../services/visit.service";
import { PetService } from "../../services/pet.service";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

//Modelos
import { Visit } from "../../models/visit";
import { Pet } from "../../models/pet";

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.css']
})
export class VisitFormComponent implements OnInit {

  //Atributos

  private pet: Pet;
  private visit: Visit;


  private texto: string;
  private globalPetId: number;
  private globalVisitId: number;

  constructor(private httpVisit: VisitService, private httpPet: PetService, private ruta: Router, private route: ActivatedRoute) {

    this.pet = <Pet>{};
    this.visit = <Visit>{};

  }

  ngOnInit() {
    const petId = this.route.snapshot.params["idPet"];
    console.log("idPet " + petId);


    if (petId) {
      console.log("Vamos a añadir");
      this.texto = "ADD";
      this.globalPetId = petId;

      //Obtener el pet para escribir en el form el nombre y pasarle el id que necesita para añadir
      this.obtenerPet(petId);
      
    }

  }

  obtenerPet(id) {
    this.httpPet.getPetId(id).subscribe(objPet => {
      console.log("Resp");
      console.log(objPet);
      
      this.pet = objPet;
    });
  }

  addModVisit() {
    console.log(this.pet);
    // if(this.globalPetId) {
    //   this.httpVisit.addVisit(this.visit).subscribe(respuesta => {
    //     console.log(respuesta);
    //     this.ruta.navigate(["/owners"]);
    //   })
    // }

  }

}
