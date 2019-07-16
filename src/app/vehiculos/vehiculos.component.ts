import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IVehiculo } from "./shared/vehiculo.model";
import { VehiculoService } from "./shared/vehiculo.service";
import { RegistrarEntradaComponent } from "./registrar-entrada/registrar-entrada.component";
import { MatDialog } from "@angular/material/dialog";
import { ModalSalidaVehiculoComponent } from "./shared/modal-salida-vehiculo/modal-salida-vehiculo.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-vehiculos",
  templateUrl: "./vehiculos.component.html",
  styleUrls: ["./vehiculos.component.scss"]
})
export class VehiculosComponent implements OnInit {
  @ViewChild("formRegistro", { static: false })
  formularioDeRegistro: RegistrarEntradaComponent;

  constructor(
    private servicioDeVehiculos: VehiculoService,
    public dialog: MatDialog,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.servicioDeVehiculos.listarVehiculosParqueados();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalSalidaVehiculoComponent, {
      width: "40%",
      data: this.servicioDeVehiculos.vehiculoQueSaldra
    });

    dialogRef.afterClosed().subscribe(vehiculo => {
      if (vehiculo) {
        this.registrarSalida();
      } else {
        this.servicioDeVehiculos.vehiculoQueSaldra = null;
      }
    });
  }

  registrarEntrada(vehiculo: IVehiculo): void {
    this.servicioDeVehiculos.registrarEntrada(vehiculo).subscribe(
      respuesta => {
        this.formularioDeRegistro.limpiarFormulario();
        this.toast.success(
          `se registro la entrada del vehiculo con placa ${
            vehiculo.placa
          } de manera exitosa`,
          "Registro de entrada"
        );
      },
      err => {
        this.toast.error(err, "Error al ingresar:");
      }
    );
  }

  confirmarSalida(placa: string): void {
    this.servicioDeVehiculos.confirmarSalida(placa);
    this.openDialog();
  }

  registrarSalida(): void {
    this.servicioDeVehiculos.registrarSalida().subscribe(
      respuesta => {
        this.toast.success(
          `El vehiculo con placa ${
            this.servicioDeVehiculos.vehiculoQueSaldra.placa
          } fue retirado`,
          "Registro de salida"
        );
      },
      err => {
        this.toast.error(err, "Error al sacar vehículo:");
      }
    );
  }
}
