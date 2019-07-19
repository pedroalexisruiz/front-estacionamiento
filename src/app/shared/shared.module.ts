import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarraMenuComponent } from "./barra-menu/barra-menu.component";
import { ContenedorParallaxComponent } from "./contenedor-parallax/contenedor-parallax.component";
import { FullHeightCardComponent } from "./full-height-card/full-height-card.component";

@NgModule({
  declarations: [
    BarraMenuComponent,
    ContenedorParallaxComponent,
    FullHeightCardComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
