import { Component, OnInit } from '@angular/core';
import { AlumnoService } from "../../servicios/alumno.service";
import { EstadocivilService } from "../../servicios/estadocivil.service";
import { Alumno } from "../../modelos/alumno";
import { Estadocivil } from "../../modelos/estadocivil";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {
  //Atributos
  private alumno: Alumno;
  private texto: string;
  private diferenciadorAddMod: number;

  //Para pintar en el select los diferentes datos, abra que hacer una peticion y obtener un listado de ellos.
  //Como sexo y estado civil tienen los mismo atributos no es necesario crear un nuevo modelo.
  private estadociviles: Estadocivil[];
  private sexos: Estadocivil[];

  constructor(private httpA: AlumnoService, private httpEC: EstadocivilService, private ruta: Router, private route: ActivatedRoute) {

    this.alumno = <Alumno>{};
   }

  ngOnInit() {

    //Obtener listas de sexos y estadosciviles
    this.httpEC.listarEstadosCiviles().subscribe(resp => {
      //console.log("Estados civiles", resp);
      this.estadociviles = resp;
    });

    this.httpEC.listarSexos().subscribe(resp => {
      //console.log("Sexos", resp);
      this.sexos = resp;
    });

    const idAlumno = this.route.snapshot.params["id"];
    console.log("idAlumno", idAlumno);

  

    if(idAlumno == -1){
      this.texto = "Añadir";
      this.diferenciadorAddMod = idAlumno;
    }
    else {
      this.texto = "Modificar";
      this.diferenciadorAddMod = idAlumno;

      //Obtener el alumno seleccionado y escribirlo en el form
      this.httpA.obtenerAlumno(idAlumno).subscribe(resp => {
        console.log("Alumno para modificar", resp);
        this.alumno = resp;
      });
    }
  }

  addModAlumno(){

    if(this.diferenciadorAddMod == -1){
      //console.log("Objeto para añadir", this.alumno);
      this.httpA.addAlumno(this.alumno).subscribe(resp => {

        this.ruta.navigate(["/alumnos"]);
      });
    }
    else {
      this.httpA.modAlumno(this.alumno).subscribe(resp => {
        
        this.ruta.navigate(["/alumnos"]);
      })
    }
  }

}
