import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCobroComponent } from './modal-cobro.component';

describe('ModalCobroComponent', () => {
  let component: ModalCobroComponent;
  let fixture: ComponentFixture<ModalCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
