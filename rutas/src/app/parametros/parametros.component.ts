import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor(private ruta: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const p1 = this.route.snapshot.params["p1"];
    const p2 = this.route.snapshot.params["p2"];

    console.log(p1);
    console.log(p2);
  }

}
