import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTable } from "@angular/material";
import { ListaVehiculosDataSource } from "./lista-vehiculos-datasource";
import { VehiculoService } from "../shared/vehiculo.service";
import { IVehiculo } from "../shared/vehiculo.model";

@Component({
  selector: "app-lista-vehiculos",
  templateUrl: "./lista-vehiculos.component.html",
  styleUrls: ["./lista-vehiculos.component.scss"]
})
export class ListaVehiculosComponent implements OnInit {
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
    "totalAPagar"
  ];

  vehiculosParqueados: IVehiculo[];

  constructor(private servicioDeVehiculos: VehiculoService) {}

  ngOnInit() {
    this.cargarVehiculosParqueados();
  }

  cargarVehiculosParqueados(): void {
    this.servicioDeVehiculos
      .listarVehiculosParqueados()
      .subscribe(vehiculos => {
        this.vehiculosParqueados = vehiculos;
        this.dataSource = new ListaVehiculosDataSource(
          this.vehiculosParqueados
        );
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      });
  }
}
