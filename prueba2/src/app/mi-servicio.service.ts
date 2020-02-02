import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public DatosUno: string[];

  //tipos de definir un array 
  public arrayMoreno = new Array();

  //Siempre siempre hay que declarar el tipo de los atributos
  public arrayMoreno2: any[];

  constructor() { 
    this.DatosUno = ["pan", "casa","camino","destino"];
    this.arrayMoreno = ["Queso", 25, true, ["corona","enfermedad"], "canabis", this.DatosUno];
    
  }

  mensaje(texto:string){
    alert(texto);

  }
}
