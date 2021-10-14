import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { EnvioGuardar } from "@envio/shared/model/envioGuardar";
import { EnvioService } from "@envio/shared/service/envio.service";
import { listarUsuario } from "@usuario/shared/model/listarUsuarios";
import { Usuario } from "@usuario/shared/model/usuario";
import { UsuarioService } from "@usuario/shared/service/usuario.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-crear-envio",
  templateUrl: "./crear-envio.component.html",
  styleUrls: ["./crear-envio.component.css"],
})
export class CrearEnvioComponent implements OnInit {
  listaDeUsuarios : Observable<listarUsuario[]>;
  filterRemitente = '';

  envioGuardar: EnvioGuardar = new EnvioGuardar();
  cedulaRemitente = '';

  itemEnviadoR : listarUsuario = new listarUsuario();
  itemEnviadoD : listarUsuario = new listarUsuario();

  usuarioRemitente : Usuario = new Usuario();
  usuarioDestinataio : Usuario = new Usuario();
  

  constructor(private router: Router, protected envioServices: EnvioService, protected usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  guardar(envioform: NgForm) {

    if(!envioform){
      return false
    }
    this.envioServices.guardar(this.envioGuardar).subscribe(
      (response: any) => {
        alert("se ha creado el envio con el id: " + response.valor);
      },
      (err) => {
        alert(" " + err.error.mensaje + " con codigo de error: " + err.status);
      });
  }

  listarUsuarios(){
    this.listaDeUsuarios = this.usuarioService.consultar();
  }
  
  cancelar() {
    alert("se ha cancelado la creacion del envio");
    this.router.navigateByUrl("envio/listarEnvios");
  }
  
  optenerParametrosR(){
    
    alert('cedula ' + Object.values(this.listaDeUsuarios))
    this.usuarioRemitente.cedula = this.itemEnviadoR.cedula;
    this.usuarioRemitente.nombre = this.itemEnviadoR.nombre; 
  }
  optenerParametrosD(){
    
    alert('cedula ' + Object.values(this.listaDeUsuarios))
    this.usuarioDestinataio.cedula = this.itemEnviadoD.cedula;
    this.usuarioDestinataio.nombre = this.itemEnviadoD.nombre; 
  }
  crearNuevoUsuario(){
    this.router.navigateByUrl("/usuario/crearUsuario");
  }

}
