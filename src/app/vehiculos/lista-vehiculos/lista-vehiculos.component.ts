import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from "@angular/core";
import { MatPaginator, MatSort, MatTable } from "@angular/material";
import { ListaVehiculosDataSource } from "./lista-vehiculos-datasource";
import { IVehiculo } from "../shared/vehiculo.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-lista-vehiculos",
  templateUrl: "./lista-vehiculos.component.html",
  styleUrls: ["./lista-vehiculos.component.scss"]
})
export class ListaVehiculosComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IVehiculo>;
  dataSource: ListaVehiculosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "id",
    "placa",
    "tipoDeVehiculo",
    "horaDeEntrada",
    "horaDeSalida",
    "cilindraje",
    "totalAPagar",
    "acciones"
  ];

  @Input() vehiculosParqueados: IVehiculo[];
  @Output() registrarSalidaDelVehiculo = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("vehiculosParqueados" in changes) {
      this.actualizarTabla();
    }
  }

  solicitarSalidaDeVehiculo(idTicket: number) {
    this.registrarSalidaDelVehiculo.emit(idTicket);
  }

  actualizarTabla() {
    this.dataSource = new ListaVehiculosDataSource(this.vehiculosParqueados);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (this.table) {
      this.table.dataSource = this.dataSource;
    }
  }
}
