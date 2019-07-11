import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntradaComponent } from './registrar-entrada.component';

describe('RegistrarEntradaComponent', () => {
  let component: RegistrarEntradaComponent;
  let fixture: ComponentFixture<RegistrarEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
