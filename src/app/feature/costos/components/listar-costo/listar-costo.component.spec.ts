import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCostoComponent } from './listar-costo.component';

describe('ListarCostoComponent', () => {
  let component: ListarCostoComponent;
  let fixture: ComponentFixture<ListarCostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
