import { Component, OnInit } from '@angular/core';
import { FacturasService } from "../facturas.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  //Atributos
  private facturas: Object[];

  constructor(private httpFactura: FacturasService, private ruta: Router, private router: ActivatedRoute) {
  
   }

  ngOnInit() {

    this.httpFactura.listadoFacturas().subscribe(resp => {
      console.log(resp);
      this.facturas = resp;
    })
  }

}
