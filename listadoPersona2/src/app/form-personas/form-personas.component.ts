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
  private textoBoton: string;


  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route: ActivatedRoute) {

    this.datosPersona = {
      id: -1,
      dni: "",
      nombre: "",
      apellidos: ""
    };

    this.textoBoton = "";
  }




ngOnInit() {
  const personaId = this.route.snapshot.params["id"];
  console.log("id param " + personaId);
  personaId;

  if (personaId == -1) {
    this.textoBoton = "Añadir"
  }
  else {
    this.textoBoton = " Modificar"

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


}

addModPersona(){
  console.log(this.datosPersona);

  if(this.datosPersona.id == -1){
    this.servicioAjax.petiAnadir(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos).subscribe(respuesta => {
      console.log(respuesta);
      this.ruta.navigate(["/"]);
    });

  }
  else {
    this.servicioAjax.petiModificar(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos, this.datosPersona.id).subscribe(respuesta => {
      console.log(respuesta);
      this.ruta.navigate(["/"]);
    })
  }
  
}

}
