import { Component, OnInit } from '@angular/core';
import { PAJAXService } from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';


@Component({
  selector: 'app-form-modificar',
  templateUrl: './form-modificar.component.html',
  styleUrls: ['./form-modificar.component.css']
})
export class FormModificarComponent implements OnInit {

  //Atributos
  private datosPersona: Persona;

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route: ActivatedRoute) {

    this.datosPersona = <Persona>{}
  }

  ngOnInit() {

    const personaId = this.route.snapshot.params["id"];
    console.log("id param " + personaId);

    // Seleccionamos persona y la añadimos al formulario
    this.servicioAjax.petiSelPersona(personaId).subscribe(respuesta => {
      console.log("Esta es la persona que queremos modificar");
      console.log(respuesta);

      this.datosPersona.id = respuesta.id;
      this.datosPersona.dni = respuesta.dni;
      this.datosPersona.nombre = respuesta.nombre;
      this.datosPersona.apellidos = respuesta.apellidos;
    });
  }

  modPersona (){
    this.servicioAjax.petiModificar(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos, this.datosPersona.id).subscribe(respuesta => {
      console.log(respuesta);
      this.ruta.navigate(["/"]);
    });
  }

}
