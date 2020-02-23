import { Component, OnInit } from '@angular/core';
import { VetService } from "../../services/vet.service";
import { SpecialtieService } from "../../services/specialtie.service";
import { Vet } from "../../models/vet";
import { Specialties } from "../../models/specialties";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.css']
})
export class VetFormComponent implements OnInit {

  //Atributos
  private vet: Vet;
  private specialties: Specialties[];

  private globalVetId: number;
  private texto: string;

  constructor(private httpVet: VetService, private httpSpecialtie: SpecialtieService, private ruta: Router, private route: ActivatedRoute) { 
    this.vet = <Vet>{};
  }

  ngOnInit() {
    const vetId = this.route.snapshot.params["idVet"];
    console.log("Id de vet", vetId);

    if(vetId){
      this.texto = "ADD";
      this.globalVetId = vetId;
    }

    //Obtener Specialties para pintarlas
    this.httpSpecialtie.listSpecialties().subscribe(objspecialties => {
      console.log(objspecialties);
      this.specialties = objspecialties;
    });

  }

  addModVet(){
    
    if(this.globalVetId){
      this.httpVet.addVet(this.vet).subscribe(resp => {
        console.log(resp);
        this.ruta.navigate(["/vet-details/"+ this.vet.id]);
      });
    }
  }

}
