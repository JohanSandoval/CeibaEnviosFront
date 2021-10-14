import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Ciudad } from "@ciudad/shared/model/ciudad";
import { CiudadService } from "./ciudad.service";
import { HttpResponse } from "@angular/common/http";

describe("CiudadService", () => {
  let httpMock: HttpTestingController;
  let service: CiudadService;
  const apiEndPointConsultaCiudad = `${environment.endpoint}/ciudad`;
  const apiEndPointCiudad = `${environment.endpoint}/ciudad`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CiudadService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CiudadService);
  });

  it("deberia de crearse", () => {
    const ciudadService : CiudadService = TestBed.inject(CiudadService);
    expect(ciudadService).toBeTruthy();
  });

  it('deberia Listar pretamos', () => {
    let testCiudad : Ciudad = new Ciudad();
    testCiudad.id = 1;
    testCiudad.nombre = 'BOGOTA';
    const dummyCiudad = [
      testCiudad
    ];
    service.consultar().subscribe(ciudad =>{
      expect(ciudad.length).toBe(1);
      expect(ciudad).toEqual(dummyCiudad);
    });
    const req = httpMock.expectOne(apiEndPointConsultaCiudad);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCiudad);
  });

  it('deberia crear una ciudad', () =>{
    let testCiudad : Ciudad = new Ciudad();
    testCiudad.nombre = 'BOGOTA';
    const dummyCiudad = testCiudad;
    service.crear(dummyCiudad).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointCiudad);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualizar una ciudad', () =>{
    let testCiudad : Ciudad = new Ciudad();
    testCiudad.id = 1
    testCiudad.nombre = 'BOGOTA';
    const dummyCiudad = testCiudad;
    service.actualizar(dummyCiudad.id, dummyCiudad).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointCiudad}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
