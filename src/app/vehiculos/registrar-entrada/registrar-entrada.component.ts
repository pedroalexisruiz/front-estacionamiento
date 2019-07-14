import { Component, OnInit, Output, ViewChild } from "@angular/core";
import { IVehiculo } from "../shared/vehiculo.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-registrar-entrada",
  templateUrl: "./registrar-entrada.component.html",
  styleUrls: ["./registrar-entrada.component.scss"]
})
export class RegistrarEntradaComponent implements OnInit {
  vehiculo: IVehiculo = {
    id: 0,
    placa: "",
    tipoDeVehiculo: ""
  };

  @Output() formularioVehiculoRegistrado = new EventEmitter<IVehiculo>();

  constructor() {}

  ngOnInit() {}

  registrarEntrada(): void {
    this.formularioVehiculoRegistrado.emit(this.vehiculo);
  }

  limpiarFormulario(): void {
    this.vehiculo = {
      id: 0,
      placa: "",
      tipoDeVehiculo: "",
      cilindraje: 0
    };
  }
}
