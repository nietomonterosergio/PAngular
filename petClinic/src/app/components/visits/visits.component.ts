import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VisitService } from "../../services/visit.service";
import { Visit } from "../../models/visit";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  @Input() visits: Visit[];
  @Input() ownerId: number;

  @Output() borraVisit = new EventEmitter;

  constructor(private http: VisitService, private ruta: Router, private route: ActivatedRoute) { 

    //this.visits = <Visit[]>{}
  }

  ngOnInit() {
    //console.log(this.visits);
  }

  deleteVisit(id){
    console.log("Vamos a borrar");
    console.log(id);

    if(confirm("¿Quieres borrar la visita?")){
      
      this.http.delVisit(id).subscribe( resp => {
        console.log(resp);
        this.borraVisit.emit(resp);
      });
    }

  }

}
