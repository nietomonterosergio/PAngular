import { Component, OnInit } from '@angular/core';
import { FacturasService } from "../facturas.service";

//Para poder navegar (routing) de forma progrmática:
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  //Atributos
  private detalleFactura: string;
  private detalles: Object[];

  private accion: string;

  private diferenciaAddMod: number;
  private id: number;
  private id_factura: number;
  private cantidad: number;
  private concepto: string;
  private precio: number;
  private tipo_iva: number;

  private iva: number;
  private total: number;

  private mostrar: boolean;

  constructor(private httpFactura: FacturasService, private ruta: Router, private router: ActivatedRoute) {
    
  }

  ngOnInit() {
    const idFactura = this.router.snapshot.params["id"];
    console.log(idFactura);

    const numero = this.router.snapshot.params["numero"];
    console.log(numero);

    this.detalleFactura = numero;

    this.listarDetalles(idFactura);

    this.id_factura = idFactura;
    

  }

  listarDetalles(idFactura){
    //Obtener lista detalles
    this.httpFactura.listadoDetalle(idFactura).subscribe(resp => {
      console.log(resp);
      this.detalles = resp;
    });
  }

  mostrarDiv(id: number, cantidad:number, concepto:string, precio:number, tipo_iva:number) {
    this.mostrar = true;
    this.diferenciaAddMod = id;

    if(this.diferenciaAddMod == -1){
      this.accion = "Añadir";
      this.cantidad = 0;
      this.concepto = "";
      this.precio = 0;
      this.tipo_iva = 0;
    }
    else{
      this.accion = "Modificar";
      this.cantidad = cantidad;
      this.concepto = concepto;
      this.precio = precio;
      this.tipo_iva = tipo_iva;
    }
  }

  noMostrarDiv(){
    this.mostrar = false;
  }

  borraDetalle(id:number){
    if(confirm("¿ Deseas borrar este detalle de la factura ?")){
      this.httpFactura.borrarDetalle(id, this.id_factura).subscribe(resultado=>{
        this.listarDetalles(this.id_factura);
      })
    }
  }

  addModDetalle(){

    console.log(this.diferenciaAddMod);

    if(this.diferenciaAddMod == -1){
      //console.log(this.detalle);

      let detalle = {
        id_factura: this.id_factura,
        cantidad: this.cantidad,
        concepto: this.concepto,
        precio: this.precio,
        tipo_iva: this.tipo_iva
      }
      this.httpFactura.addDetalle(detalle).subscribe(resp => {
        console.log(resp);
        this.listarDetalles(this.id_factura);
      });
    }
    else {
      let detalle = {
        id: this.diferenciaAddMod,
        id_factura: this.id_factura,
        cantidad: this.cantidad,
        concepto: this.concepto,
        precio: this.precio,
        tipo_iva: this.tipo_iva
      }
      this.httpFactura.modificarDetalle(detalle).subscribe(resultado=>{
        this.listarDetalles(this.id_factura);
      })
    }

    this.mostrar = false;
  }



}
