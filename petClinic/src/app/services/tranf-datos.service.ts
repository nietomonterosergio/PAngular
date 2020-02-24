import { Injectable } from '@angular/core';
import { Visit } from "../models/visit";

@Injectable({
  providedIn: 'root'
})
export class TranfDatosService {

  private datos: Visit[];
  constructor() {
    this.datos = [];
   }

   guardarDatos(datos){
     this.datos = datos;
   }

   leerDatos(){
     return this.datos;
   }

}
