import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "../app/components/home/home.component";
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"owners",
    component: OwnersComponent
  },
  {
    path:"vets",
    component: VetsComponent
  },
  {
    path: "owner/:id",
    component: OwnerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
