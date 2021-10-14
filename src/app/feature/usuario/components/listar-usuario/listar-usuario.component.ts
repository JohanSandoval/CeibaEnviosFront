import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listarUsuario } from '@usuario/shared/model/listarUsuarios';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  public listarUsuarios: Observable<listarUsuario[]>;
  filterUsuario = '';

  constructor(protected usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.listarUsuarios = this.usuarioService.consultar();
  }

  actualizar(usuario : listarUsuario){
    alert("usuario a actualizar con cedula " + usuario.cedula + " y id: " + usuario.id);
    this.router.navigate(['usuario/actualizarUsuario'],{
      queryParams:{
        usuarioId : usuario.id,
        usuarioCedula : usuario.cedula,
        usuarioNombre : usuario.nombre,
        usuarioApellido : usuario.apellido,
        usuarioCiudad : usuario.ciudad.id,
        usuarioTelefono : usuario.telefono
      }
    });
  }

}
