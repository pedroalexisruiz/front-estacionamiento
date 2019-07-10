import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaVehiculosComponent } from "./vehiculos/lista-vehiculos/lista-vehiculos.component";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, ListaVehiculosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
