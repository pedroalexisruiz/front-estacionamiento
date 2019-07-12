import { Component, OnInit, Inject } from "@angular/core";
import { IVehiculo } from "../shared/vehiculo.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-modal-salida-vehiculo",
  templateUrl: "./modal-salida-vehiculo.component.html",
  styleUrls: ["./modal-salida-vehiculo.component.scss"]
})
export class ModalSalidaVehiculoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalSalidaVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVehiculo
  ) {}

  ngOnInit() {}
}
