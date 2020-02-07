import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from "../../models/owner";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  //Atributos
  private owner: Owner;

  constructor(private http: OwnerService, private ruta: Router, private route: ActivatedRoute) { 

    //Para que no me de un error de que este objeto no esta creado o es nulo hace falta inicializarlo y para no tener que poner todos los atributos de owner: 
    this.owner = <Owner>{};
  }
    
   

  ngOnInit() {
    const ownerId = this.route.snapshot.params["id"];
    console.log(ownerId);

    //Obtener detalles del owner
    this.http.getOwnerId(ownerId).subscribe(detallesOwner => {
      console.log(detallesOwner);

      this.owner = detallesOwner;
    });
  }

}
