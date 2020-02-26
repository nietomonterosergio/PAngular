import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { AlumnoService } from "../../servicios/alumno.service";
import { Alumno } from "../../modelos/alumno";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-del',
  templateUrl: './alumno-del.component.html',
  styleUrls: ['./alumno-del.component.css']
})
export class AlumnoDelComponent implements OnInit {

  @Input() alumno: Alumno;

  @Output() delAlumno = new EventEmitter;

  constructor(private httpA: AlumnoService, private ruta: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.alumno);
  }

  borrar(){
    this.httpA.borrarAlumno(this.alumno.ID).subscribe(resp => {
      this.delAlumno.emit(resp);
    });
  }

  cancelar(){
    this.delAlumno.emit();
  }

}
