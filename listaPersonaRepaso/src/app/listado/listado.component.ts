import { Component, OnInit } from '@angular/core';
import { AJAXService } from "../ajax.service";
import { Persona } from '../persona';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private personas: Persona [];

  constructor(private servicioAjax: AJAXService, private ruta: Router, private route:ActivatedRoute) {

    this.servicioAjax.peticionListar().subscribe(respuesta => {
      console.log("Respuesta de la petición listar");
      console.log(respuesta);

      this.mostrarPersona(respuesta);
      
    });
  }

  //Métodos o funciones
  ngOnInit() {
  }

  mostrarPersona(datos: Persona[]){
    console.log("Estammos en mostrar persona");
    console.log(datos);

    this.personas = datos;
  }

  irNuevaPersona(){
    this.ruta.navigate(['personas-add/-1']);
  }

  borrarPersona(id: number){
    console.log(id);

    if(confirm("¿Quiere borrar a este individuo?")){
      this.servicioAjax.peticionBorrar(id).subscribe(respuesta => {
        console.log(respuesta);
  
        this.mostrarPersona(respuesta);
      });
    }
    
  }
}
