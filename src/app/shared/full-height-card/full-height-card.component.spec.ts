import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHeightCardComponent } from './full-height-card.component';

describe('FullHeightCardComponent', () => {
  let component: FullHeightCardComponent;
  let fixture: ComponentFixture<FullHeightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHeightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHeightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
