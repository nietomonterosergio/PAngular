import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  //Atributos
  public datos: any = null; //Va a ser donde guardaremos el Json devuelto por la petición (next,result)
  public listPer: Object[] //Meteremos el array de objetos de todos los personajes
  public datosPlanetas: Object = null; //Es necesario inicializarlo. 

  constructor(private servicioAjax: PAJAXService) {

     //Hacer la petición ajax y daticos es lo que devuelve la petición
    this.servicioAjax.peti().subscribe(daticos => {
      console.log(daticos);
      this.asignarDatos(daticos);
    });

   }

  ngOnInit() {
  }

  asignarDatos(datitos: Object) {

    console.log(datitos);

    //This.datos no es el mismo que datitos pasado por parámetro ya que aun esta a null. No esta inicializado.
    this.datos = datitos;
    this.listPer = this.datos.results;
    console.log(this.listPer);
  }

  next() {
    console.log(this.datos.next);
    var urlNext = this.datos.next;

    if(urlNext != null){
      
      //Hacemos una petición a esa url
      this.servicioAjax.petiADir(urlNext).subscribe(daticos => {
        console.log(daticos);

        //Llamamos de nuevo a asignar los datos para rellenar la tabla
        this.asignarDatos(daticos);
      });
    }
    else {
      alert("Estas en la última página");
    }
  }

  previous() {
    console.log(this.datos.previous);
    var urlPrevious = this.datos.previous

    if(urlPrevious != null){
      this.servicioAjax.petiADir(urlPrevious).subscribe(daticos => {
        console.log(daticos);
        this.asignarDatos(daticos);
      });
    }
    else {
      alert("Estas en la primera página");
    }
  }

  mostrarDatosPlaneta(planetaURL: string, evento) {
    console.log(planetaURL);
    console.log(evento);

    

    this.servicioAjax.petiADir(planetaURL + "?format=json").subscribe(respuesta => {
      console.log(respuesta);
      

      this.datosPlanetas = respuesta;
     // this.escribirDatosPlaneta(respuesta); 
    });
  }

   //Tenemos dos opciones  de escribir los datos directamente con una función como anteriormente
  //O otra forma es creando un nuevo componente y añadiendo un parametro de entrada.

 escribirDatosPlaneta(datitosPlanetas : Object) {
  console.log("Estoy aqui");
  console.log(datitosPlanetas);
   this.datosPlanetas = datitosPlanetas;
}


}
