import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Envio } from '../model/envio';
import { EnvioGuardar } from '../model/envioGuardar';


@Injectable()
export class EnvioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<any>(`http://localhost:8080${environment.endpoint}/envios`, this.http.optsName('consultar envio'));
  }

  public guardar(envioGuardar: EnvioGuardar) {
    return this.http.doPost<EnvioGuardar, boolean>(`${environment.endpoint}/envios`, envioGuardar,
                                                this.http.optsName('crear envio'));
  }

  public consultarById(envio: Envio) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/envios/${envio.id}`,
                                                 this.http.optsName('consultar envio por id'));
  }
}
