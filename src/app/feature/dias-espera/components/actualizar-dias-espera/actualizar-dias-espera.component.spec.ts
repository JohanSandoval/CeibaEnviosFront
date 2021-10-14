import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDiasEsperaComponent } from './actualizar-dias-espera.component';

describe('ActualizarDiasEsperaComponent', () => {
  let component: ActualizarDiasEsperaComponent;
  let fixture: ComponentFixture<ActualizarDiasEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDiasEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDiasEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
