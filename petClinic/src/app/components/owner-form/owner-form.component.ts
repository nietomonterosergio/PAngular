import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from "../../models/owner";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  //Atributos
  private owner: Owner;

  constructor(private http: OwnerService, private ruta: Router, private route: ActivatedRoute) { 
    this.owner = <Owner>{};
  }


  //Funciones
  ngOnInit() {

  }

  addPersona(){
    console.log(this.owner);

    this.http.addOwner(this.owner).subscribe(respuesta => {
      console.log(respuesta);

      this.ruta.navigate(["/owner"]);
    });
  }

}
