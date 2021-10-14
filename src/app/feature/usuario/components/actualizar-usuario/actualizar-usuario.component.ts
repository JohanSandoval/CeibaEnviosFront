import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { Usuario } from '@usuario/shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  public listaCiudades: Observable<Ciudad[]>;
  usuario : Usuario = new Usuario();

  
  constructor(private router : Router, protected usuarioService : UsuarioService, protected ciudadService : CiudadService, protected route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.listarCiudades();
    this.optenerParametros();
  }

  actualizar(usuarioForm : NgForm){
    if(!usuarioForm){
      return false;
    }

    this.usuarioService.actualizar(this.usuario.id, this.usuario).subscribe(
      (response) => {
        response = this.usuario.cedula;
        alert('se a actualizado el usuario ' + response);
        this.router.navigateByUrl("usuario/listarUsuario");
      },
      (err) => {
        alert('' + err.error.mensaje + ' con codigo de error: ' + err.status);
      }
    );
  }

  listarCiudades(){
    this.listaCiudades = this.ciudadService.consultar();
  }

  optenerParametros(){
    this.route.queryParams.subscribe(params =>{
      this.usuario.id = params.usuarioId;
      this.usuario.cedula = params.usuarioCedula;
      this.usuario.nombre = params.usuarioNombre;
      this.usuario.apellido = params.usuarioApellido;
      this.usuario.ciudad = params.usuarioCiudad;
      this.usuario.telefono = params.usuarioTelefono;
    });
  }

}
