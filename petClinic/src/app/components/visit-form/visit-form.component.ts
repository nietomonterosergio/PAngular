import { Component, OnInit } from '@angular/core';
import { VisitService } from "../../services/visit.service";
import { PetService } from "../../services/pet.service";
import { TranfDatosService } from 'src/app/services/tranf-datos.service';

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
  private visits: Visit[];


  private vacio: boolean;
  private texto: string;
  private globalPetId: number;
  private globalVisitId: number;

  constructor(private httpVisit: VisitService, private httpPet: PetService, private tranferirDatos: TranfDatosService, private ruta: Router, private route: ActivatedRoute) {

    this.vacio = false;
    this.pet = <Pet>{};
    this.visit = <Visit>{};

  }

  ngOnInit() {
    const petId = this.route.snapshot.params["idPet"];
    console.log("idPet " + petId);

    const visitId = this.route.snapshot.params["idVisit"];
    console.log("idVisit " + visitId);

    //Para pintar los datos utilizando el servicio =>
    this.visits = this.tranferirDatos.leerDatos();
    console.log("Oninit array", this.tranferirDatos.leerDatos());

    if (petId) {
      console.log("Vamos a añadir");
      this.texto = "ADD";
      this.globalPetId = petId;

      //Obtener el pet para escribir en el form el nombre y pasarle el idPet que necesita para añadir
      this.httpPet.getPetId(petId).subscribe(objPet => {
        console.log("Resp oninit objPet");
        console.log(objPet);
        this.pet = objPet;

        //Para escribir la tabla de información inicial
        this.vacio = true;
      });
    }

    if (visitId) {
      
      console.log("vamos a modificar");
      this.texto = "MOD";
      this.globalVisitId = visitId;

      //Recogemos el objeto visita y lo escribimos sus datos en el form
      this.httpVisit.obtenerVisitaId(visitId).subscribe(objVisit => {
        console.log("Resp oninit objVisit");
        console.log(objVisit);

        this.visit.id = objVisit.id;
        this.visit.petId = objVisit["pet"].id;
        this.visit.visitDate = objVisit.visitDate;
        this.visit.description = objVisit.description;


        //Para que se vuelva a escribir la informacion de la tabla en el form, nos acordamos que todo objeto visita tiene dentro el objeto pet
        this.pet = objVisit["pet"];

      
        //Para escribir la tabla de información inicial
        this.vacio = true;
        
      });
    }

  }

  addModVisit() {

    //console.log(this.pet);
    //console.log(this.visit);

    if (this.globalPetId) {
      
      //Hay que pasarle el id del petId para que pueda hacer la peticion añadir correctamente
      this.visit.petId = this.globalPetId;

      this.httpVisit.addVisit(this.visit).subscribe(respuesta => {
        console.log("Resp add");
        console.log(respuesta);
        this.ruta.navigate(["/owner/" + this.pet.owner.id]);
      })
    }

    if (this.globalVisitId) {

      //Hay que pasarle el id del petId para que pueda hacer la peticion modificar correctamente

      console.log(this.visit.petId);

      console.log("Objeto visita que vamos a modificar");
      console.log(this.visit);

      //Hay que pasarle el id de visita para que pueda hacer la petición modificar  correctamente
      this.httpVisit.modVisit(this.visit).subscribe(respuesta => {
        console.log(respuesta);
        this.ruta.navigate(["/owner/" + this.pet.owner.id]);
      });
    }
  }

}
