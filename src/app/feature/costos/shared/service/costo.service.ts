import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Costos } from '../model/costo';

@Injectable({
  providedIn: 'root'
})
export class CostoService {

  constructor(protected http: HttpClient) { }

  public consultar(){
    return this.http.get<Costos[]>(`${environment.endpoint}/costoEnvio`);
  }

  public consultarById(id: number){
    return this.http.get<Costos[]>(`${environment.endpoint}/costoEnvio/${id}`);
  }

  public actualizar(id : number ,costos: Costos){
    return this.http.put(`${environment.endpoint}/costoEnvio/${id}`,costos);
  }

  public crear(costos: Costos){
    return this.http.post(`${environment.endpoint}/costoEnvio`,costos);
  }
}
