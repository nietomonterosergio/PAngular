import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tercer',
  templateUrl: './tercer.component.html',
  styleUrls: ['./tercer.component.css']
})
export class TercerComponent implements OnInit {
  
  @Input() nombreEquipo; //Parametro de entrada
  
  constructor() { }

  ngOnInit() {
  }

}
