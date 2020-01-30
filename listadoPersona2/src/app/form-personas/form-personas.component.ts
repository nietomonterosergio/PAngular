import { Component, OnInit } from '@angular/core';
import { PAJAXService } from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent implements OnInit {

  //Atributos

  // private datos : {
  //   dni: string,
  //   nombre: string,
  //   apellidos: string
  // }

  private datosPersona: Persona;

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route: ActivatedRoute) {

    this.datosPersona = {
      id: -1,
      dni: "",
      nombre: "",
      apellidos: ""
    };

  }

  ngOnInit() {
     
  }

  addPersona() {
    console.log(this.datosPersona);

    this.servicioAjax.petiAnadir(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos).subscribe(respuesta => {
      console.log(respuesta);
      this.ruta.navigate(["/"]);
    });



  }

}
