import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'segundo-componente',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  atributo1="Este es el segundo componente";
  atributo2= new Array("Betis", "Valencia", "Madrid", "At.Madrid");

  constructor() { }

  ngOnInit() {
  }

}
