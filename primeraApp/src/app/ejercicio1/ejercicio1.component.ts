import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  //Definimos todos los atributos

  public mostrar: boolean; //Es una variable booleana, que se refiere al primer parrafo

  //Tenemos un objeto jacascript, para los datos del formulario. Pero realmente será una clase. Los datos se enviarán al servidor mediante una petición Ajax
  //Aqui definimos el tipo de objeto y abajo le damos un valor para que no de error

  private datos: {
    nombre: string,
    apellidos: string,
    estatura: number,
    fnacimiento: Date
  };

  //PARA LLENAR EL SELECT
  //Creamos un array de objetos
private opciones: Array<object>;

opsel: Object = null;

  constructor() {
    this.mostrar = true;
    this.datos = {nombre:"", apellidos:"", estatura:0, fnacimiento: new Date()}

    this.opciones = [
      {id:1, nombre:"Opcion1"},
      {id:2, nombre:"Opcion2"},
      {id:3, nombre:"Opcion3"},
      {id:4, nombre:"Opcion4"},
      {id:5, nombre:"Opcion5"}
    ]
   }


   //Creamos los métodos o funciones
  ngOnInit() {

  }

  enviar() {
    alert("Aquí vamos a enviar el formulario");
  }

  seleccion(args:any) {
    //console.log(this.opsel);
    console.log(args);
    //console.log(this.opciones);
  }



}
