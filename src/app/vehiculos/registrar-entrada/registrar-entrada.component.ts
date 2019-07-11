import { Component, OnInit } from "@angular/core";
import { VehiculoService } from "../shared/vehiculo.service";
import { IVehiculo } from "../shared/vehiculo.model";

@Component({
  selector: "app-registrar-entrada",
  templateUrl: "./registrar-entrada.component.html",
  styleUrls: ["./registrar-entrada.component.scss"]
})
export class RegistrarEntradaComponent implements OnInit {
  vehiculo: IVehiculo = {
    id: 0,
    placa: "",
    tipoDeVehiculo: "",
    cilindraje: 0
  };
  constructor(private servicioDeVehiculos: VehiculoService) {}

  ngOnInit() {}

  registrarEntrada(): void {
    this.servicioDeVehiculos.registrarEntrada(this.vehiculo).subscribe(id => {
      this.vehiculo.id = id;
    });
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
