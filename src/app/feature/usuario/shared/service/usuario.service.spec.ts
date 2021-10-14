import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { listarUsuario } from '../model/listarUsuarios';
import { Usuario } from '../model/usuario';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let httpMock : HttpTestingController;
  let service: UsuarioService;
  const apiEndPointConsultarUsuario = `${environment.endpoint}/usuario`;
  const apiEndPointUsuario = `${environment.endpoint}/usuario`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UsuarioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    const usuarioSerivce : UsuarioService = TestBed.inject(UsuarioService);
    expect(usuarioSerivce).toBeTruthy();
  });

  it('deberia listar usuarios', () => {
    let testCiudad : Ciudad = new Ciudad();
    testCiudad.id = 1;
    testCiudad.nombre = 'BOGOTA';
    let testUsuario : listarUsuario = new listarUsuario();
    testUsuario.id = 1;
    testUsuario.cedula = '987654321'
    testUsuario.nombre = 'test';
    testUsuario.apellido = 'test';
    testUsuario.ciudad = testCiudad;
    testUsuario.telefono = '12345678'
    const dummyUsuario = [
      testUsuario
    ];
    service.consultar().subscribe(usuario => {
      expect(usuario.length).toBe(1);
      expect(usuario).toEqual(dummyUsuario);
    });
    const req = httpMock.expectOne(apiEndPointConsultarUsuario);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuario);
  });


  it('deberia de crear un usuario', () => {
    let testUsuario : Usuario = new Usuario();
    testUsuario.id = 1;
    testUsuario.cedula = '12345678';
    testUsuario.nombre = 'test';
    testUsuario.apellido = 'test';
    testUsuario.ciudad = 1;
    testUsuario.telefono = '5553331';
    const dummyUsuario = testUsuario;
    service.crear(dummyUsuario).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointUsuario);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia de actualizar usuario', () =>{
    let testUsuario : Usuario = new Usuario();
    testUsuario.id = 1;
    testUsuario.cedula = '123456789';
    testUsuario.nombre = 'nombre';
    testUsuario.apellido = 'apellido';
    testUsuario.ciudad = 2;
    testUsuario.telefono = '7777777';
    const dummyUsuario = testUsuario;
    service.actualizar(dummyUsuario.id, dummyUsuario).subscribe((respuestar) => {
      expect(respuestar).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointUsuario}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body : true}));
  });

});
