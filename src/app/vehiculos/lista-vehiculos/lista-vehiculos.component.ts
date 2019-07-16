import { Component, OnInit, Input, Output } from "@angular/core";
import { IVehiculo } from "../shared/vehiculo.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-lista-vehiculos",
  templateUrl: "./lista-vehiculos.component.html",
  styleUrls: ["./lista-vehiculos.component.scss"]
})
export class ListaVehiculosComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["Placa", "Tipo De Vehiculo", "Hora De Entrada", ""];

  @Input() vehiculosParqueados: IVehiculo[];
  @Output() registrarSalidaDelVehiculo = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  solicitarSalidaDeVehiculo(idTicket: number) {
    this.registrarSalidaDelVehiculo.emit(idTicket);
  }
}
