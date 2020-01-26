import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primer-componente', //Es el nombre que le damos a la etiqueta o componente
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  //Atributos

  title="Hola Sergio"; /*Hay que definir el tipo de variable que es, 
                       a no ser que la inicialicemos directamente y TypeScript reconoce su tipo directamente*/


//El constructor es siempre la primera función que se ejecuta, al crear al componente
  constructor() { }

  ngOnInit() {
  }

}
