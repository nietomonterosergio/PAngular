import { Component, OnInit } from '@angular/core';
import { VetService } from "../../services/vet.service";
import { Vet } from "../../models/vet";

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

  private texto: string;

  constructor(private http: VetService, private ruta: Router, private route: ActivatedRoute) { 
    this.vet = <Vet>{};
  }

  ngOnInit() {
    const vetId = this.route.snapshot.params["idVet"];
    console.log("Id de vet", vetId);

    if(vetId){
      this.texto = "ADD";
    }
  }

  addModVet(){
    
  }

}
