import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IVehiculo } from "./shared/vehiculo.model";
import { VehiculoService } from "./shared/vehiculo.service";
import { RegistrarEntradaComponent } from "./registrar-entrada/registrar-entrada.component";
import { ListaVehiculosComponent } from "./lista-vehiculos/lista-vehiculos.component";

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

  constructor(private servicioDeVehiculos: VehiculoService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.cargarVehiculosParqueados();
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

  registrarSalida(indicevehiculo: number): void {
    this.servicioDeVehiculos
      .registrarSalida(
        this.vehiculosParqueados.find(
          vehiculo => vehiculo.id === indicevehiculo
        )
      )
      .subscribe(id => {
        this.cargarVehiculosParqueados();
      });
  }
}
