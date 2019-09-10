import { Component, ViewChild } from "@angular/core";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("componenteVehiculos", { static: false })
  componenteVehiculos: VehiculosComponent;

  enfocarFormulario($event) {
    this.componenteVehiculos.enfocarFormulario();
  }
}
