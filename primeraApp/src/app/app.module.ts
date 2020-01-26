import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimerComponent } from './primer/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TercerComponent } from './tercer/tercer.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import {FormsModule} from '@angular/forms';
import { Ejercicio2CrudComponent } from './ejercicio2-crud/ejercicio2-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    SegundoComponent,
    TercerComponent,
    Ejercicio1Component,
    Ejercicio2CrudComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
