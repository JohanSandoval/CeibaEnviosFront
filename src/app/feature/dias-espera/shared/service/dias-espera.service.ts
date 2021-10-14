import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DiasEspera } from '../model/dias-espera';
import { listarDiasEspera } from '../model/listarDiasEspera';

@Injectable({
  providedIn: 'root'
})
export class DiasEsperaService {

  constructor(protected http: HttpClient) { }

  public consultar(){
    return this.http.get<listarDiasEspera[]>(`${environment.endpoint}/diasEspera`);
  }

  public consultarById(id : number){
    return this.http.get<listarDiasEspera[]>(`${environment.endpoint}/diasEspera/${id}`)
  }

  public crear(diasEspera: DiasEspera){
    return this.http.post(`${environment.endpoint}/diasEspera`,diasEspera);
  }

  public actualizar(id : number, diasEspera : DiasEspera){
    return this.http.put(`${environment.endpoint}/diasEspera/${id}`, diasEspera);
  }
}
