import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Alumno } from "../modelos/alumno";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlServidor = "http://localhost/AJAX/Servicios/servicios.php";

  constructor(private http: HttpClient) { }

  //Peticiones
  listarAlumnos(){
    var objAlumnos = JSON.stringify({
      accion: 3
    });
    return this.http.post<Alumno[]>(this.urlServidor, objAlumnos);
  }

  obtenerAlumno(id){
    var objAlumno = JSON.stringify({
      accion: 4,
      ID: id
    });
    return this.http.post<Alumno>(this.urlServidor, objAlumno);
  }

  addAlumno(alumno){
    var objAlumno = JSON.stringify({
      accion: 0,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL
    });
    return this.http.post<Alumno[]>(this.urlServidor, objAlumno);
  }

  modAlumno(alumno){
    var objAlumno = JSON.stringify({
      accion: 1,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL,
      ID: alumno.ID
    });
    return this.http.post<Alumno[]>(this.urlServidor, objAlumno);
  }

  borrarAlumno(id){
    var objAlumno = JSON.stringify({
      accion: 2,
      ID: id
    });
    return this.http.post<Alumno[]>(this.urlServidor, objAlumno);
  }
}
