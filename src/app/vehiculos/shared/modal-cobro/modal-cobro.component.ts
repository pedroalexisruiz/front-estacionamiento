import { Component, OnInit, Inject } from "@angular/core";
import { IVehiculo } from "../vehiculo.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-modal-cobro",
  templateUrl: "./modal-cobro.component.html",
  styleUrls: ["./modal-cobro.component.scss"]
})
export class ModalCobroComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalCobroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVehiculo
  ) {}

  ngOnInit() {}
}
