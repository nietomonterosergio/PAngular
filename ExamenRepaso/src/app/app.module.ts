import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
