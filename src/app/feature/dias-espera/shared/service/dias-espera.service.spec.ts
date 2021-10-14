import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { DiasEspera } from '../model/dias-espera';
import { listarDiasEspera } from '../model/listarDiasEspera';

import { DiasEsperaService } from './dias-espera.service';

describe('DiasEsperaService', () => {
  let httpMock : HttpTestingController;
  let service: DiasEsperaService;
  const apiEndPointConsultarDiasEspera = `${environment.endpoint}/diasEspera`;
  const apiEndPointDiasEspera = `${environment.endpoint}/diasEspera`;
  

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DiasEsperaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(DiasEsperaService);
  });

  it('should be createdd', () => {
    const diasEsperaService : DiasEsperaService = TestBed.inject(DiasEsperaService);
    expect(diasEsperaService).toBeTruthy();
  });

  it('deberia de listar Rutas(dias Espera)', () => {
    let testCiudad : Ciudad = new Ciudad();
    testCiudad.id = 1;
    testCiudad.nombre = 'BOGOTA';
    let testDiasEspera : listarDiasEspera = new listarDiasEspera();
    testDiasEspera.id = 1;
    testDiasEspera.ciudadOrigen = testCiudad;
    testDiasEspera.ciudadDestino = testCiudad;
    testDiasEspera.dias = 3;
    const dummyDiasEspera = [
      testDiasEspera
    ];
    service.consultar().subscribe((diasEspera) => {
      expect(diasEspera.length).toBe(1);
      expect(diasEspera).toEqual(dummyDiasEspera);
    });
    const req = httpMock.expectOne(apiEndPointConsultarDiasEspera);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDiasEspera);
  });

  it('deberia crear una ruta(dias espera)', () =>{
    let testDiasEspera : DiasEspera = new DiasEspera();
    testDiasEspera.id = 1;
    testDiasEspera.idCiudadO = 1;
    testDiasEspera.idCiudadD = 1;
    testDiasEspera.dias = 3;
    const dummyDiasEspera = testDiasEspera;
    service.crear(dummyDiasEspera).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointDiasEspera);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualizar una ruta(dias espera)', () => {
    let testDiasEspera : DiasEspera = new DiasEspera();
    testDiasEspera.id = 1;
    testDiasEspera.idCiudadO = 2;
    testDiasEspera.idCiudadD = 2;
    testDiasEspera.dias = 5;
    const dummyDiasEspera = testDiasEspera;
    service.actualizar(dummyDiasEspera.id, dummyDiasEspera).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointDiasEspera}/1`);
    expect(req.request.method).toBe('PUT');
    req.event( new HttpResponse<boolean>({body: true}));
  });  
});
