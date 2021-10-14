import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Costos } from '../model/costo';

import { CostoService } from './costo.service';

describe('CostoService', () => {
  let httpMock: HttpTestingController;
  let service: CostoService;
  const apiEndPointConsultaCosto = `${environment.endpoint}/costoEnvio`;
  const apiEndPointCosto = `${environment.endpoint}/costoEnvio`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CostoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CostoService);
  });

  it('should be created', () => {
    const costoService : CostoService = TestBed.inject(CostoService);
    expect(costoService).toBeTruthy();
  });


  it('deberia listar costos', () =>{
    let testCostos : Costos = new Costos();
    testCostos.id = 1;
    testCostos.pesoMin =0.1;
    testCostos.pesoMax = 10;
    testCostos.costo = 5000;
    
    const dummyCostos = [
      testCostos      
    ];
    service.consultar().subscribe(costos => {
      expect(costos.length).toBe(1);
      expect(costos).toEqual(dummyCostos);
    });
    const req = httpMock.expectOne(apiEndPointConsultaCosto);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCostos);
  });


  it('deberia crear costos', () =>{
    let testCostos : Costos = new Costos();
    testCostos.id = 1;
    testCostos.pesoMin =0.1;
    testCostos.pesoMax = 10;
    testCostos.costo = 5000;

    const dummyCostos = testCostos;
    service.crear(dummyCostos).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointCosto);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia de actualizar costo', ()=>{
    let testCostos : Costos = new Costos();
    testCostos.id = 1;
    testCostos.pesoMin =0.1;
    testCostos.pesoMax = 10;
    testCostos.costo = 5000;
    const dummyCostos = testCostos;
    service.actualizar(dummyCostos.id, dummyCostos).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointCosto}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body:true}));
  });
});
