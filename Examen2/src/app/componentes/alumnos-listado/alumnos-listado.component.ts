import { Component, OnInit } from '@angular/core';
import { AlumnoService } from "../../servicios/alumno.service";
import { Alumno } from "../../modelos/alumno";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent implements OnInit {

  //Atributos
  private alumnos: Alumno[];
  private total: number;

  private mostrar: boolean;
  private borrarAlumno: Alumno;

  constructor(private httpA: AlumnoService , private ruta: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    //Listar los alumnos
    this.httpA.listarAlumnos().subscribe(resp => {
      console.log(resp);
      this.alumnos = resp;
      this.total = resp.length;
    });
  }

  mostrarBorrar(alumno: Alumno){
    this.mostrar = true;

    this.borrarAlumno = alumno;
  }

  actualizarAlumnos(datos){
    console.log(datos);

    if(datos){
     this.alumnos = datos; 
     this.mostrar = false;
     this.total = datos.length;
    }
    else {
      this.mostrar = false;
    }

    
  }
}
