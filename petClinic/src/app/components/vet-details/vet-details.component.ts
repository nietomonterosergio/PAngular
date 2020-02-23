import { Component, OnInit } from '@angular/core';
import { Vet } from "../../models/vet";
import { VetService } from "../../services/vet.service";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.css']
})
export class VetDetailsComponent implements OnInit {

  //Atributo
  private vet: Vet;

  constructor(private httpVet: VetService, private ruta: Router, private route: ActivatedRoute) {
    this.vet = <Vet>{};
   }

  ngOnInit() {

    const vetId = this.route.snapshot.params["idVet"];
    console.log("Id de vet",vetId);

    this.httpVet.getVetId(vetId).subscribe(objVet =>{
      console.log( "Resp onninit", objVet);
      this.vet = objVet;

    });
  }

}
