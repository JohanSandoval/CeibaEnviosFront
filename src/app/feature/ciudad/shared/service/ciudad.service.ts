import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../model/ciudad';


@Injectable()
export class CiudadService {

  constructor(protected http: HttpClient) { }

  public consultar(){
    return this.http.get<Ciudad[]>(`${environment.endpoint}/ciudad`);
  }

  public consultarById(id: number){
    return this.http.get<Ciudad[]>(`${environment.endpoint}/ciudad/${id}`);
  }

  public actualizar(id : number ,ciudad: Ciudad){
    return this.http.put(`${environment.endpoint}/ciudad/${id}`,ciudad);
  }

  public crear(ciudad: Ciudad){
    return this.http.post(`${environment.endpoint}/ciudad`,ciudad);
  }
}
