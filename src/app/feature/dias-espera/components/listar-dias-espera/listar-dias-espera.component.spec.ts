import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiasEsperaComponent } from './listar-dias-espera.component';

describe('ListarDiasEsperaComponent', () => {
  let component: ListarDiasEsperaComponent;
  let fixture: ComponentFixture<ListarDiasEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDiasEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiasEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
