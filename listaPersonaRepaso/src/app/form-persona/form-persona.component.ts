import { Component, OnInit } from '@angular/core';
import { AJAXService } from "../ajax.service";
import { Persona } from '../persona';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  //Atributos
  private datosPersona: Persona;

  private textoBoton: String;

  constructor(private servicioAjax: AJAXService, private ruta: Router, private route: ActivatedRoute) {

    this.datosPersona = {
      id: -1,
      dni: "123456789s",
      nombre: "Manolo",
      apellidos: "Gafotas"
    };

    this.textoBoton = "";
  }

  //Métodos y funciones
  ngOnInit() {

    const personaId = this.route.snapshot.params["id"];
    console.log(personaId);

    if(personaId == -1){
      this.textoBoton = "Añadir";
    } 
    else {
      this.textoBoton = "Modificar";

      this.servicioAjax.peticionSelPersona(personaId).subscribe(respuesta => {
        console.log(respuesta);

        this.datosPersona.id = respuesta.id;
        this.datosPersona.dni = respuesta.dni;
        this.datosPersona.nombre = respuesta.nombre;
        this.datosPersona.apellidos = respuesta.apellidos;
      });
    }

    
  }

  addModPersona(){
    debugger;
    if(this.datosPersona.id == -1){

      this.servicioAjax.peticionAnadir(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos).subscribe(respuesta => {
        console.log(respuesta);
        this.ruta.navigate(["/"]);      
        
      });
    }
    else {
      this.servicioAjax.peticionModificar(this.datosPersona.dni, this.datosPersona.nombre, this.datosPersona.apellidos, this.datosPersona.id).subscribe(respuesta => {
        console.log(respuesta);
        this.ruta.navigate(["/"]);
      });
    }

    
  }



}
