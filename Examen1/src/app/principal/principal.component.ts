import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  //Atributos
  private datosFacturas: Object[];

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route:ActivatedRoute) {

    this.servicioAjax.listarFacturas().subscribe(respuesta => {
      console.log(respuesta);
      this.mostrarFacturas(respuesta);
    })
   }


  //Métodos y funciones 
  ngOnInit() {
  }

  mostrarFacturas(datos: Object[]){
    console.log(datos);
    this.datosFacturas = datos;
  }

}
