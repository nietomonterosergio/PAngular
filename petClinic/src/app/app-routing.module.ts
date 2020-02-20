import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "../app/components/home/home.component";
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { VisitFormComponent } from './components/visit-form/visit-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    //Ruta lista owner principal
    path:"owners",
    component: OwnersComponent
  },
  {
    //Ruta detalles owner
    path: "owner/:id",
    component: OwnerDetailsComponent
  },
  {
    //Ruta formulario owner
    path: "ownerForm/:id",
    component: OwnerFormComponent
  },
  {
    //Ruta formulario pet add
    path: "petForm/:idOwner",
    component: PetFormComponent
  },
  {
    //Ruta formulario pet mod
    path: "petForm-mod/:idPet",
    component: PetFormComponent
  },
  {
    //Ruta formulario visit add
    path: "visitForm/:idPet",
    component: VisitFormComponent

  },
  {
    //Ruta formulario visit mod
    path: "visitForm-mod/:idVisit",
    component: VisitFormComponent
  },
  {
    path:"vets",
    component: VetsComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
