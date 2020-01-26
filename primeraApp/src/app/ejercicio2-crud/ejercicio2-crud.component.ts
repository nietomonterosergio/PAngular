import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-crud',
  templateUrl: './ejercicio2-crud.component.html',
  styleUrls: ['./ejercicio2-crud.component.css']
})
export class Ejercicio2CrudComponent implements OnInit {

//Atributos

private lista: string[];
private gHobbit: string;
private accion: {id: number, nombre: string, indice:number};

  constructor() {

		this.lista = ["Bilbo Bolsón", "Sam Gamyi", "Frodo Bolsón", 
			"Pippin Paladin", "Merry Brandigamo", "Rosita Coto"];
		this.gHobbit = "";
    this.accion = {id:1, nombre:"Añadir", indice:-1};  //  1 -> Añadir;  2 -> Modificar
  
   }

  ngOnInit() {
	}

  AMboton() {
    console.log(this.gHobbit);
    if (this.gHobbit.trim().length == 0){
      this.gHobbit = "";
      return;
    }
    if (this.accion.id == 1) {
      this.lista.push(this.gHobbit);
    }
    else {
      
      this.lista[this.accion.indice] = this.gHobbit;
      this.gHobbit = "";
      this.accion = {id: 1, nombre: "modificar", indice:-1};
    }
    

  }

  eliminar(hobbit: string) {

    //Una manera para recorrer el arrive y encontrar la posición exacta
    var indice=this.lista.indexOf(hobbit);

    var opcion = confirm("Quieres eliminar al hobbit "+hobbit+" de la lista?");
    if (opcion) {
      //Esta funnción eliminará el hobbit seleccionado
    this.lista.splice(indice,1);
    }
    
  }

  editar(hobbit: string, indice: number) {
    console.log(hobbit);
    console.log(indice)

    //Asignamos el nombre a el atributo de la clase para que se modifique
    this.gHobbit = hobbit;
    this.accion = {id:2, nombre:"Modificar", indice:indice};

    
  }

  

}
