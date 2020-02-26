import { Component, OnInit } from '@angular/core';
import { EstadocivilService } from "../../servicios/estadocivil.service";
import { Estadocivil } from "../../modelos/estadocivil";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadosciviles',
  templateUrl: './estadosciviles.component.html',
  styleUrls: ['./estadosciviles.component.css']
})
export class EstadoscivilesComponent implements OnInit {

  //Atributos
  private estadociviles: Estadocivil[];
  private total: number;

  constructor(private httpEC: EstadocivilService, private ruta: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.httpEC.listarEstadosCiviles().subscribe(resp => {
      //console.log(resp);

      this.estadociviles = resp;
      this.total = resp.length;
    });

    
  }

}
