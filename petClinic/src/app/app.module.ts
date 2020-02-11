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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetailsComponent,
    OwnerFormComponent
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
