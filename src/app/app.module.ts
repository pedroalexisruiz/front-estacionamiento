import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaVehiculosComponent } from "./vehiculos/lista-vehiculos/lista-vehiculos.component";
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
  MatPaginatorIntl
} from "@angular/material";
import { getSpanishPaginatorIntl } from "./shared/spanish-paginator-intl";
import { RegistrarEntradaComponent } from "./vehiculos/registrar-entrada/registrar-entrada.component";

@NgModule({
  declarations: [
    AppComponent,
    ListaVehiculosComponent,
    RegistrarEntradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
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
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
