import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent implements OnInit {

  //Atributos

  private datos : {
    dni: string,
    nombre: string,
    apellidos: string
  }


  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route:ActivatedRoute) {

      this.datos = {dni: "", nombre:"", apellidos: ""};


   }

  ngOnInit() {
  }

  anadirPersona(){
    console.log(this.datos);

    this.servicioAjax.petiAnadir(this.datos.dni, this.datos.nombre, this.datos.apellidos).subscribe( respuesta => {
      console.log(respuesta);
      this.ruta.navigate(["/"]);
    });
  }

}
