import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAJAXService {

  //Atributos

  //Al ser un a api necesitamos la url para hacer la petición ajax
  private urlPersonajes = "https://swapi.co/api/people/?format=json";


  constructor(private http: HttpClient) { }

  //Métodos

  //En esta función la petición ajax se realizará a url el atributo anterior
  peti() {
    console.log("Estoy en peti");
    return this.http.get(this.urlPersonajes);
  }

  //En esta función la petición ajax se realizará al parametro pasado
  petiADir(url: string) {
    console.log("Estoy en peti a dirección");
    
    return this.http.get(url);
  }

}
