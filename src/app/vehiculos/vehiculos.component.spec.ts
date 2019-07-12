import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VehiculosComponent } from "./vehiculos.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VehiculoService } from "./shared/vehiculo.service";
import { MatPaginatorIntl } from "@angular/material";
import { getSpanishPaginatorIntl } from "app/shared/spanish-paginator-intl";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { ModalSalidaVehiculoComponent } from './shared/modal-salida-vehiculo/modal-salida-vehiculo.component';
import { VehiculosModule } from './vehiculos.module';

describe("VehiculosComponent", () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;

  const carroAIngresar = {
    id: 1,
    placa: "PED123",
    tipoDeVehiculo: "CARRO"
  };

  const motoAIngresar = {
    id: 2,
    placa: "PED124",
    tipoDeVehiculo: "MOTO",
    cilindraje: 150
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, VehiculosModule],
      providers: [
        HttpClient,
        VehiculoService,
        {
          provide: MatPaginatorIntl,
          useValue: getSpanishPaginatorIntl()
        }
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ModalSalidaVehiculoComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("deberia abrir el modal de confirmacion", () => {
    // arrange
    const spy = spyOn(component, "openDialog");
    component.vehiculosParqueados = [carroAIngresar, motoAIngresar];

    // act
    component.confirmarSalida(2);

    // assert
    expect(spy).toHaveBeenCalled();
  });
});
