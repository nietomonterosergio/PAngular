import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import {HttpClientModule} from '@angular/common/http';
import { FormPersonasComponent } from './form-personas/form-personas.component';
import { FormModificarComponent } from './form-modificar/form-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormPersonasComponent,
    FormModificarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
