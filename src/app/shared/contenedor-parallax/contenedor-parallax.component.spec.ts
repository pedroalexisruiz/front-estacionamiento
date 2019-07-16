import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorParallaxComponent } from './contenedor-parallax.component';

describe('ContenedorParallaxComponent', () => {
  let component: ContenedorParallaxComponent;
  let fixture: ComponentFixture<ContenedorParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
