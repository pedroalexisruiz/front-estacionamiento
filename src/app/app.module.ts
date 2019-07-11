import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaVehiculosComponent } from "./vehiculos/lista-vehiculos/lista-vehiculos.component";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatPaginatorIntl
} from "@angular/material";
import { getSpanishPaginatorIntl } from "./shared/spanish-paginator-intl";

@NgModule({
  declarations: [AppComponent, ListaVehiculosComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
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
