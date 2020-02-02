import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  @Input() entrada: any;

  constructor() { }

  ngOnInit() {
  }

}
