import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { ListarCiudadComponent } from './listar-ciudad.component';

describe('ListarCiudadComponent', () => {
  let component: ListarCiudadComponent;
  let fixture: ComponentFixture<ListarCiudadComponent>;
  let ciudadService: CiudadService;
  let ciudadTest : Ciudad = new Ciudad();
  ciudadTest.id = 1;
  ciudadTest.nombre = 'BOGOTA';
  const listaCiudades : Ciudad[] = [ciudadTest];

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ ListarCiudadComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CiudadService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCiudadComponent);
    component = fixture.componentInstance;
    ciudadService = TestBed.inject(CiudadService);
    spyOn(ciudadService, 'consultar').and.returnValue(
      of(listaCiudades)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaCiudades.subscribe(resultado => {
      expect(1).toBe(resultado.length);
    });
  });
});
