import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { listarUsuario } from '../model/listarUsuarios';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(protected http: HttpClient) { }

  public consultar(){
    return this.http.get<listarUsuario[]>(`${environment.endpoint}/usuario`);
  }

  public consultarById(cedula: string){
    return this.http.get<Usuario[]>(`${environment.endpoint}/usuario/${cedula}`);
  }

  public crear(usuario: Usuario){
    return this.http.post(`${environment.endpoint}/usuario`,usuario);
  }

  public actualizar(id : number, usuario : Usuario){
    return this.http.put(`${environment.endpoint}/usuario/${id}`, usuario);
  }
}
