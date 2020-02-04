import { Component, OnInit } from '@angular/core';
import {PAJAXService} from "../p-ajax.service";

//Para poder navegar (routing) de forma progrmática:
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  //Atributos
  private detalleFactura: String;

  //Tenemos el arrive de detalles de una factura
  private datosDetalle: Object[];

  //Tenemos que tener detalle como unico objeto
  private detalle: {
    id: number,
    id_factura: number,
    cantidad: number,
    concepto: string,
    precio: number,
    tipo_iva: number
  }
  
  
  private importe: number;
  private iva: number;
  private total: number;

  private ivaTotal: number;
  private totaliti: number;

  private mostrar: boolean;
  private texto: string;

  constructor(private servicioAjax: PAJAXService, private ruta: Router, private route:ActivatedRoute) { 


    //Es necesario inicializar
    this.detalle = {
      id: -1,
      id_factura: 0,
      cantidad: 0,
      concepto: "",
      precio: 0,
      tipo_iva: 0
    };

    this.mostrar = false;

    this.texto = "";

    // this.ivaTotal = 0;

    // this.totaliti = 0;
  }
  //Métodos y funciones

  ngOnInit() {
    const facturaId = this.route.snapshot.params["id"];
    const facturaNumero = this.route.snapshot.params["numero"];

    console.log(facturaId);
    console.log(facturaNumero);

    this.detalleFactura = facturaNumero;
    this.asignarDetalle(facturaId);

    //Asignar id de la factura al objeto detalle para que al modificar o añadir sepa de que factura es
    this.detalle.id_factura = facturaId;

    
  }

  asignarDetalle(id:number){
    console.log(id);

    this.servicioAjax.listarDetalle(id).subscribe(respuesta => {
      console.log(respuesta);
      this.mostrarDetalle(respuesta);
    });
  }

  mostrarDetalle(datos: Object[]){
    console.log(datos);
    this.datosDetalle = datos;
  }

  //Tener en cuenta que podemos pasarle el objeto detalle entero o solo los parametros necesarios
  calcularIva(cantidad: number, precio:number, tipo_iva: number){

    this.importe = cantidad * precio;
    this.iva = this.importe * tipo_iva/100;

    //Ira sumando uno por uno
    //this.ivaTotal = this.iva + this.ivaTotal;

    return this.iva.toFixed(2);
  }

  calcularTotal(){
    
    this.total = this.iva + this.importe;

   // this.totaliti = this.total + this.totaliti
    
    return this.total.toFixed(2);
  }

  mostrarForm(id: number,cantidad: number, concepto:string, precio: number, tipo_iva:number){
    this.mostrar = true;
    
    //Para añadir o modificar, diferenciar bien el id de la factura con el id del detalle
    if (this.detalle.id == -1) {
      this.texto = "Añadir"
    }
    else {
      this.texto = "Modificar"
      //Elegir la perosna adecuada y sustituir por los campos del form
      this.detalle.id = id;
      this.detalle.cantidad = cantidad;
      this.detalle.concepto = concepto;
      this.detalle.precio = precio;
      this.detalle.tipo_iva = tipo_iva;
      
    }
  }

  borrarDetalle(id: number,  concepto: string){
    console.log(id);

    if(confirm("¿Quieres borrar el detalle "+concepto+" ?")){

      this.servicioAjax.peticionBorrar(id, this.detalle.id_factura).subscribe(respuesta => {
        console.log(respuesta);

       this.asignarDetalle(this.detalle.id_factura);
      });
    }
    
  }

  addModDetalle(){

    //Se añade
    if(this.detalle.id == -1) {
      this.servicioAjax.peticionAnadir(this.detalle).subscribe(respuesta => {
        console.log(respuesta);

        this.asignarDetalle(this.detalle.id_factura);
      });
    }
    else{
      this.servicioAjax.peticionModificar(this.detalle).subscribe(respuesta => {
        console.log(respuesta);

        this.asignarDetalle(this.detalle.id_factura);

      });
    }

    //Se vuelve a ocultar el form
    this.mostrar = false;

  }





  

}
