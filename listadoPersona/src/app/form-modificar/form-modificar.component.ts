import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-modificar',
  templateUrl: './form-modificar.component.html',
  styleUrls: ['./form-modificar.component.css']
})
export class FormModificarComponent implements OnInit {

  //Atributos

  private datos : {
    dni: string,
    nombre: string,
    apellidos: string
  };

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route:ActivatedRoute) {

   }

  ngOnInit() {
    const personaId = this.route.snapshot.params["id"];
    console.log("id param " +personaId);
    personaId;

    //Seleccionamos persona
    this.servicioAjax.petiSelPersona(this.id).subscribe(respuesta => {
      console.log(respuesta);
      
      
    });
  }

  modificarPersona(){

  }

}
