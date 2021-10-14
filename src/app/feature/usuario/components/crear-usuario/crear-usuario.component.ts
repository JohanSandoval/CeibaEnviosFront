import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudad } from '@ciudad/shared/model/ciudad';
import { CiudadService } from '@ciudad/shared/service/ciudad.service';
import { Observable } from 'rxjs';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public listaCiudades: Observable<Ciudad[]>;
  
  usuario: Usuario = new Usuario();

  constructor(protected ciudadService : CiudadService, protected usuarioService : UsuarioService, private router: Router){ }

  ngOnInit(): void {
    this.listarCiudades()  
  }

  crear(usuarioForm : NgForm){
    if(!usuarioForm){
      return false;
    }
    
    this.usuarioService.crear(this.usuario).subscribe(
      (response: any) =>{
        alert('se ha creado el usuario con el id: ' + response.valor);
        this.router.navigateByUrl("usuario/listarUsuario");
      },
      (err) => {
        alert('' + err.error.mensaje + "con codigo de error: " +err.status);
      });
  }

  listarCiudades() {
    this.listaCiudades = this.ciudadService.consultar(); 
  }

}
