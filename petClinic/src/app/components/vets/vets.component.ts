import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet.service';
import { Vet } from 'src/app/models/vet';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  //Atributos
  private vets : Vet[];

  constructor(private servicioVet: VetService ) { }

  ngOnInit() {
    this.servicioVet.getVets().subscribe(listaVets => {
      console.log("Lista vets");
      console.log(listaVets);
      this.vets = listaVets;
    });
  }



}
