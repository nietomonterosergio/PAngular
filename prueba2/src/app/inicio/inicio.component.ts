import { Component, OnInit } from '@angular/core';
import { MiServicioService } from "../mi-servicio.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private datos1;
  private datosMoreno: any[];
  private modelo: string;

  constructor(private miServicio: MiServicioService) { 
    this.datos1 = miServicio.DatosUno;
    this.modelo = "";
   
  }

  ngOnInit() {
    //Si itilizamos el miServicio fuera del constructor tenemos que poner this
    this.datosMoreno = this.miServicio.arrayMoreno2;
    
  }

  llamadita(evento){
    console.log(evento);
    this.miServicio.mensaje("Llamada") ;
   }

}
