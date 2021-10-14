import { HttpResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Ciudad } from "@ciudad/shared/model/ciudad";
import { HttpService } from "@core/services/http.service";
import { listarUsuario } from "@usuario/shared/model/listarUsuarios";
import { environment } from "src/environments/environment";
import { Envio } from "../model/envio";
import { EnvioGuardar } from "../model/envioGuardar";
import { EnvioService } from "./envio.service";

describe("EnvioService", () => {
  let httpMock: HttpTestingController;
  let service: EnvioService;
  const apiEndPointConsultaEnvio = `${environment.endpoint}/envio`;
  const apiEndPointEnvio = `${environment.endpoint}/envio`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvioService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EnvioService);
  });

  it("should be created", () => {
    const envioService: EnvioService = TestBed.inject(EnvioService);
    expect(envioService).toBeTruthy();
  });

  it("deberia de listar envio", () => {
    let testCiudad: Ciudad = new Ciudad();
    testCiudad.id = 1;
    testCiudad.nombre = 'bogota';
  

    let testUsuario: listarUsuario = new listarUsuario();
    testUsuario.id = 1;
    testUsuario.cedula = "123456789";
    testUsuario.nombre = "nombre";
    testUsuario.apellido = "apellido";
    testUsuario.ciudad = testCiudad;
    testUsuario.telefono = "7777777";
    
    let testEnvio: Envio = new Envio();
    testEnvio.id = 1;
    testEnvio.remitente = testUsuario;
    testEnvio.destinatario = testUsuario;
    testEnvio.peso = 5;
    testEnvio.costo = 25000;
    testEnvio.fechaEstimadaLLegada = '2021,10,15';
    testEnvio.direccion = 'av siempre viva';

    const dummyEnvio = [
        testEnvio
    ];
    service.consultar().subscribe(envios => {
        expect(envios.length).toBe(1);
        expect(envios).toEqual(dummyEnvio);
    });
    const req = httpMock.expectOne(apiEndPointConsultaEnvio);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEnvio);
  });
    
  it('deberia crear envio', () => {
      let testEnvio :EnvioGuardar = new EnvioGuardar();
      testEnvio.id = 1;
      testEnvio.cedulaRemitente = 1;
      testEnvio.cedulaDestinatario = 1;
      testEnvio.peso = 3;
      testEnvio.direccion = 'av bella vista';

      const dummyEnvio = testEnvio;
      service.guardar(dummyEnvio).subscribe((respuesta) =>{
          expect(respuesta).toEqual(true);
      });
      const req = httpMock.expectOne(apiEndPointEnvio);
      expect(req.request.method).toBe('POST');
      req.event(new HttpResponse<boolean>({body: true}));

  });

  it('deberia actualizar un envio', () => {
    let testEnvio :EnvioGuardar = new EnvioGuardar();
    testEnvio.id = 1;
    testEnvio.cedulaRemitente = 2;
    testEnvio.cedulaDestinatario = 2;
    testEnvio.peso = 5;
    testEnvio.direccion = 'av buena vista';
    const dummyEnvio = testEnvio;
    service.actualizar(dummyEnvio.id, dummyEnvio).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointEnvio}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
