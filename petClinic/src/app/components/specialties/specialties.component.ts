import { Component, OnInit, Input } from '@angular/core';
import { Specialties } from "../../models/specialties";
@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent implements OnInit {
  //Atributos
  @Input() specialties: Specialties; 

  constructor() { 

  }

  ngOnInit() {
    console.log(this.specialties);
  }

}
