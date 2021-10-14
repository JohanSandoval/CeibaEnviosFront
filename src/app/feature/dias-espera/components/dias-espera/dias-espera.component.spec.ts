import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasEsperaComponent } from './dias-espera.component';

describe('DiasEsperaComponent', () => {
  let component: DiasEsperaComponent;
  let fixture: ComponentFixture<DiasEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiasEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
