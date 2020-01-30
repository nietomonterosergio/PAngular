import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "../app/components/home/home.component";
import { OwnersComponent } from './components/owners/owners.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"owners",
    component: OwnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
