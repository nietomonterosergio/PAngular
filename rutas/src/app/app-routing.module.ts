import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "otro/:p1/:p2",
    component: ParametrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
