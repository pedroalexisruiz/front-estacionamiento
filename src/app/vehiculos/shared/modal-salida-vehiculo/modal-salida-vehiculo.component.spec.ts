import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSalidaVehiculoComponent } from './modal-salida-vehiculo.component';

describe('ModalSalidaVehiculoComponent', () => {
  let component: ModalSalidaVehiculoComponent;
  let fixture: ComponentFixture<ModalSalidaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSalidaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSalidaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
