import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCostoComponent } from './crear-costo.component';

describe('CrearCostoComponent', () => {
  let component: CrearCostoComponent;
  let fixture: ComponentFixture<CrearCostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
