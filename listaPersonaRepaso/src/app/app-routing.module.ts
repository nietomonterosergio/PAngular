import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';


const routes: Routes = [
  {
    path: "",
    component: ListadoComponent
  },
  {
    path: "personas-add/:id",
    component: FormPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
