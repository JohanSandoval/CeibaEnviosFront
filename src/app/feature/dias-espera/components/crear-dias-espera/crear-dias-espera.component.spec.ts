import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDiasEsperaComponent } from './crear-dias-espera.component';

describe('CrearDiasEsperaComponent', () => {
  let component: CrearDiasEsperaComponent;
  let fixture: ComponentFixture<CrearDiasEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDiasEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDiasEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
