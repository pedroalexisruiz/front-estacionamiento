import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { ContenedorParallaxComponent } from './contenedor-parallax/contenedor-parallax.component';



@NgModule({
  declarations: [BarraMenuComponent, ContenedorParallaxComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
