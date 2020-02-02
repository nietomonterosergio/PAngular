import { Component, OnInit } from '@angular/core';
import { AJAXService } from "../ajax.service";
import { Persona } from '../persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private personas: Persona [];

  constructor(private servicioAjax: AJAXService) {

    this.servicioAjax.peticionListar().subscribe(respuesta => {
      console.log("Respuesta de la petición listar");
      console.log(respuesta);

      this.personas = respuesta;
      console.log("Un array de personas");
      console.log(this.personas);
    });
  }

  ngOnInit() {
  }

}
