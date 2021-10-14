import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EnvioGuardar } from '../model/envioGuardar';


@Injectable()
export class EnvioService {

  constructor(protected http: HttpClient) {}

  public consultar() {
    return this.http.get<any>(`${environment.endpoint}/envio`);
  }

  public guardar(envioGuardar: EnvioGuardar) {
    return this.http.post(`${environment.endpoint}/envio`, envioGuardar);
  }

  public actualizar(id : number, envio : EnvioGuardar){
    return this.http.put(`${environment.endpoint}/envio/${id}`, envio);
  }
}
