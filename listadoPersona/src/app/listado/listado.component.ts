import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //Atributos
  private datosPersonas: Object;

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route:ActivatedRoute) { 

    //Primera Opción 
    //Creando el objeto en el .ts

    //  var objListar = {
    //   servicio : "listar"
    // };
    // this.servicioAjax.peti(objListar).subscribe(respuesta => {
    //   console.log(respuesta);
    // });

    //Segunda opción
    //Solo realizando la petición
    this.servicioAjax.petiListar().subscribe(respuesta => {
      console.log(respuesta);

      this.mostrarPersona(respuesta);

    });
  }

//Métodos y funciones

  ngOnInit() {
  }

  mostrarPersona(datos: Object) {
    console.log(datos);
    this.datosPersonas = datos;
  }

  iraNuevaPersona() {
    this.ruta.navigate(['personas-add/-1']);
  };

  borrarPersona(id, nombre:String, apellidos:String) {
    console.log(id);

    if(confirm("¿Estas seguro que quieres borrar a "+nombre + apellidos+"?")){

      this.servicioAjax.petiBorrar(id).subscribe(respuesta => {
        console.log(respuesta);
        this.mostrarPersona(respuesta);

      });
    }
    else {
      alert("Como usted diga webon");
    }
  };

  //El modificar se puede hacer de dos maneras, utilizando el formulario anadir o creando otro componente

  //Creando otro componente

  // irModificarPersona(id, dni, nombre, apellidos){
  //   this.ruta.navigate(['personas-mod/id'])
  // }



}
