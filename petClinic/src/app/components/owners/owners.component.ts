import { Component, OnInit } from '@angular/core';
import { Owner } from "../../models/owner";
import { OwnerService } from "../../services/owner.service";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  //Atributos
  public owners:Array<Owner>;

  constructor(private servicioOwner: OwnerService) { }

  ngOnInit() {

    this.servicioOwner.getOwners().subscribe(listaOwners => {
      //console.log(listaOwners);

      this.owners = listaOwners;
    })
  }

}
