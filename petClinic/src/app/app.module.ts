import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { HttpClientModule } from '@angular/common/http';
import { VetsComponent } from './components/vets/vets.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PetsComponent } from './components/pets/pets.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { VisitsComponent } from './components/visits/visits.component';
import { VisitFormComponent } from './components/visit-form/visit-form.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { VetFormComponent } from './components/vet-form/vet-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetailsComponent,
    OwnerFormComponent,
    PetsComponent,
    PetFormComponent,
    VisitsComponent,
    VisitFormComponent,
    SpecialtiesComponent,
    VetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
