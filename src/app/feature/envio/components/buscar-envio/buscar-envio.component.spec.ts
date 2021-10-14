import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEnvioComponent } from './buscar-envio.component';

describe('BuscarEnvioComponent', () => {
  let component: BuscarEnvioComponent;
  let fixture: ComponentFixture<BuscarEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
