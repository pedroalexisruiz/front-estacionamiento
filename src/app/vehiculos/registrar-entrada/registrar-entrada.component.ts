import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
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

  @ViewChild("placa", { static: false })
  inputPlaca: ElementRef;

  @Output() formularioVehiculoRegistrado = new EventEmitter<IVehiculo>();

  constructor() {}

  ngOnInit() {}

  registrarEntrada(): void {
    this.formularioVehiculoRegistrado.emit(this.vehiculo);
  }

  enfocarInputPlaca(): void {
    (this.inputPlaca.nativeElement as HTMLInputElement).focus();
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
