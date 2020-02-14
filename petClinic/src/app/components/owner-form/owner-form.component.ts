import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from "../../models/owner";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  //Atributos
  private owner: Owner;

  private texto: string;

  constructor(private http: OwnerService, private ruta: Router, private route: ActivatedRoute) { 
    this.owner = <Owner>{};
  }


  //Funciones
  ngOnInit() {

    const ownerId = this.route.snapshot.params["id"];
    //console.log(ownerId);
    this.owner.id = ownerId;

    if(this.owner.id == -1){
      this.texto = "ADD"
    }
    else {
      this.texto = "MOD";
      this.http.getOwnerId(this.owner.id).subscribe(objOwner => {

        //Asignamos el objeto owner con la respuesta de la peticon para que salga en el form
        this.owner = objOwner;
      });
    }
  }

  addModOwner(){
    //console.log("Estamos en ADD-MOD");
    //console.log(this.owner.id);

    if(this.owner.id == -1){

      this.http.addOwner(this.owner).subscribe(respuesta => {
        console.log(respuesta);
  
        this.ruta.navigate(["/owners"]);
      });
    }
    else {
      this.http.modOwner(this.owner).subscribe(respuesta => {
        //console.log(respuesta);

        this.ruta.navigate(["/owners"]);
      });
    }
    
  }

}
