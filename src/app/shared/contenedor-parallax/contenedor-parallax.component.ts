import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize.min.js";

@Component({
  selector: "app-contenedor-parallax",
  templateUrl: "./contenedor-parallax.component.html",
  styleUrls: ["./contenedor-parallax.component.scss"]
})
export class ContenedorParallaxComponent implements OnInit {
  @Output() enfocarFormulario = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }

  iniciar() {
    this.enfocarFormulario.emit(true);
  }
}
