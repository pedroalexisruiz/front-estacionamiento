import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { VehiculosModule } from "./vehiculos/vehiculos.module";
import { BarraMenuComponent } from "./shared/barra-menu/barra-menu.component";
import { ContenedorParallaxComponent } from "./shared/contenedor-parallax/contenedor-parallax.component";
import { FullHeightCardComponent } from './shared/full-height-card/full-height-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    ContenedorParallaxComponent,
    FullHeightCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    VehiculosModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
