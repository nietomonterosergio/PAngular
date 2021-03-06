import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from "./listado/listado.component";
import { FormPersonasComponent } from "./form-personas/form-personas.component";


//Son las credenciales de que tiene que poner en la barra de navegación para que se diriga hacia el componente.
const routes: Routes = [
  {
    path: "",
    component: ListadoComponent
  },
  {
    path: "personas-add/:id",
    component: FormPersonasComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
