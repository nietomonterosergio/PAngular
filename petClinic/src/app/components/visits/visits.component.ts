import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private http: VisitService, private ruta: Router, private route: ActivatedRoute) { 

    this.visits = <Visit[]>{}
  }

  ngOnInit() {
    //console.log(this.visits);
  }

}
