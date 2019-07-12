import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IVehiculo } from "./shared/vehiculo.model";
import { VehiculoService } from "./shared/vehiculo.service";
import { RegistrarEntradaComponent } from "./registrar-entrada/registrar-entrada.component";
import { ListaVehiculosComponent } from "./lista-vehiculos/lista-vehiculos.component";
import { MatDialog } from "@angular/material/dialog";
import { ModalSalidaVehiculoComponent } from "./modal-salida-vehiculo/modal-salida-vehiculo.component";

@Component({
  selector: "app-vehiculos",
  templateUrl: "./vehiculos.component.html",
  styleUrls: ["./vehiculos.component.scss"]
})
export class VehiculosComponent implements OnInit, AfterViewInit {
  @ViewChild("formRegistro", { static: false })
  formularioDeRegistro: RegistrarEntradaComponent;

  @ViewChild("listaDeVehiculos", { static: false })
  listaDeVehiculos: ListaVehiculosComponent;
  vehiculosParqueados: IVehiculo[] = [];
  vehiculoQueSaldra: IVehiculo | null;

  constructor(
    private servicioDeVehiculos: VehiculoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cargarVehiculosParqueados();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSalidaVehiculoComponent, {
      width: "40%",
      data: this.vehiculoQueSaldra
    });

    dialogRef.afterClosed().subscribe(vehiculo => {
      if (vehiculo) {
        this.registrarSalida();
      } else {
        this.vehiculoQueSaldra = null;
      }
    });
  }

  cargarVehiculosParqueados(): void {
    this.servicioDeVehiculos
      .listarVehiculosParqueados()
      .subscribe(vehiculos => {
        this.vehiculosParqueados = vehiculos;
        this.listaDeVehiculos.actualizarTabla();
      });
  }

  registrarEntrada(vehiculo: IVehiculo): void {
    this.servicioDeVehiculos.registrarEntrada(vehiculo).subscribe(respuesta => {
      vehiculo.id = respuesta.datos.id;
      vehiculo.horaDeEntrada = respuesta.datos.horaDeEntrada;
      this.vehiculosParqueados.push(vehiculo);
      this.formularioDeRegistro.limpiarFormulario();
      this.listaDeVehiculos.actualizarTabla();
    });
  }

  confirmarSalida(idVehiculo: number): void {
    this.vehiculoQueSaldra = this.vehiculosParqueados.find(
      vehiculo => vehiculo.id === idVehiculo
    );

    this.openDialog();
  }

  registrarSalida(): void {
    this.servicioDeVehiculos
      .registrarSalida(this.vehiculoQueSaldra)
      .subscribe(respuesta => {
        this.vehiculoQueSaldra.horaDeSalida = respuesta.datos;
        this.cargarVehiculosParqueados();
      });
  }
}
