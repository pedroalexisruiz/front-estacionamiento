import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrarEntradaComponent } from "./registrar-entrada/registrar-entrada.component";
import { VehiculosComponent } from "./vehiculos.component";
import { ListaVehiculosComponent } from "./lista-vehiculos/lista-vehiculos.component";
import { FormsModule } from "@angular/forms";
import {
  MatTableModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatToolbarModule,
  MatPaginatorIntl,
  MatDialogModule
} from "@angular/material";

import { getSpanishPaginatorIntl } from "app/shared/spanish-paginator-intl";
import { ModalSalidaVehiculoComponent } from "./shared/modal-salida-vehiculo/modal-salida-vehiculo.component";

@NgModule({
  declarations: [
    RegistrarEntradaComponent,
    VehiculosComponent,
    ListaVehiculosComponent,
    ModalSalidaVehiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    RegistrarEntradaComponent,
    VehiculosComponent,
    ListaVehiculosComponent
  ],
  entryComponents: [ModalSalidaVehiculoComponent],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl()
    }
  ]
})
export class VehiculosModule {}
